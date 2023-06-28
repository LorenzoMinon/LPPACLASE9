// Declaramos variables para obtener los campos del newsForm!!
const form = document.getElementById('subscription-form')
const nombreCompletoInput = document.getElementById('nombre-completo')
const emailInput = document.getElementById('email')
const contrasenaInput = document.getElementById('contrasena')
const repetirContrasenaInput = document.getElementById('repetir-contrasena')
const edadInput = document.getElementById('edad')
const telefonoInput = document.getElementById('telefono')
const direccionInput = document.getElementById('direccion')
const ciudadInput = document.getElementById('ciudad')
const codigoPostalInput = document.getElementById('codigo-postal')
const dniInput = document.getElementById('dni')

// Acá empezamos a usar el listener y agregar el blur.
// Utilizamos la funcion que vamos a usar para validar en c/u.


nombreCompletoInput.addEventListener('blur', validarNombreCompleto)
emailInput.addEventListener('blur',validarEmail)
contrasenaInput.addEventListener('blur',validarContrasena)
repetirContrasenaInput.addEventListener('blur',validarRepetirContrasena)
edadInput.addEventListener('blur',validarEdad)
telefonoInput.addEventListener('blur',validarTelefono)
direccionInput.addEventListener('blur',validarDireccion)
ciudadInput.addEventListener('blur',validarCiudad)
codigoPostalInput.addEventListener('blur',validarCodigoPostal)
dniInput.addEventListener('blur',validarDNI)

//Agregamos un submit al form. 
form.addEventListener('submit', enviarFormulario)

// Validaciones 

function validarNombreCompleto() {
    // El método trim() elimina los espacios 
    // en blanco en ambos extremos del string
    const valor = nombreCompletoInput.value.trim()
    if (valor < 6 || !valor.includes('')){
        mostrarError(nombreCompletoInput, 'El nombre completo debe tener'+
        ' al menos 6 letras y contener un espacio')
    }else{
        ocultarError(nombreCompletoInput)
    }
    
}

function validarEmail(){
    //usamos Regex
    const valor = emailInput.value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!emailRegex.test(valor)){
        mostrarError(emailInput, 'Ingresa una dirección valida.')
    } else{
        ocultarError(emailInput)
    }
}

function validarContrasena() {
    const valor = contrasenaInput.Value.trim()

    if(valor.lenght < 8 || !/^[a-zA-Z0-9]+$/.test(valor)){
        mostrarError(contrasenaInput, 'La contraseña debe contener '+
        'al menos 8 caracteres, solo letras y numeros')
    } else{
        ocultarError(contrasenaInput)
    }
}

function validarRepetirContrasena() {
    const valor = repetirContrasenaInput.value.trim()
    const contrasena = contrasenaInput.value.trim()

    if (valor !== contrasena){
        mostrarError(repetirContrasenaInput, 'Las contraseñas no coinciden.')
    }else{
        ocultarError(repetirContrasenaInput)
    }
}

function validarEdad() {
    const valor = parseInt(edadInput.value.trim(), 10)
  
    if (isNaN(valor) || valor < 18) {
      mostrarError(edadInput, 'Debes tener al menos 18 años para suscribirte.')
    } else {
      ocultarError(edadInput)
    }
  }
  
  function validarTelefono() {
    const valor = telefonoInput.value.trim()
  
    if (!/^\d{7,}$/.test(valor)) {
      mostrarError(telefonoInput, 'Ingresa un número de teléfono válido (al menos 7 dígitos).')
    } else {
      ocultarError(telefonoInput)
    }
  }
  
  function validarDireccion() {
    const valor = direccionInput.value.trim()
  
    if (valor.length < 5 || !/^[a-zA-Z0-9\s]+$/.test(valor)) {
      mostrarError(direccionInput, 'La dirección debe tener al menos 5 caracteres y contener solo letras, números y espacios.')
    } else {
      ocultarError(direccionInput)
    }
  }
  
  function validarCiudad() {
    const valor = ciudadInput.value.trim()
  
    if (valor.length < 3) {
      mostrarError(ciudadInput, 'La ciudad debe tener al menos 3 caracteres.')
    } else {
      ocultarError(ciudadInput)
    }
  }
  
  function validarCodigoPostal() {
    const valor = codigoPostalInput.value.trim()
  
    if (valor.length < 3) {
      mostrarError(codigoPostalInput, 'El código postal debe tener al menos 3 caracteres.')
    } else {
      ocultarError(codigoPostalInput)
    }
  }
  
  function validarDNI() {
    const valor = dniInput.value.trim()
  
    if (!/^\d{7,8}$/.test(valor)) {
      mostrarError(dniInput, 'Ingresa un número de DNI válido (7 u 8 dígitos).')
    } else {
      ocultarError(dniInput)
    }
  }
  
  function mostrarError(input, mensaje) {
    const errorSpan = document.getElementById(`error-${input.id}`)
    errorSpan.textContent = mensaje
    errorSpan.style.display = 'block'
  }
  function ocultarError(input) {
    const errorSpan = document.getElementById(`error-${input.id}`);
    errorSpan.textContent = ''
    errorSpan.style.display = 'none'
  }
  
  function enviarFormulario(event) {
    event.preventDefault()
  
    // Realizar aquí el envío de los datos o mostrar el cartel emergente con la información cargada
    // en caso de que hayan pasado todas las validaciones
  
    const errores = document.querySelectorAll('.error');
    let hayErrores = false;
  
    for (let i = 0; i < errores.length; i++) {
      if (errores[i].textContent !== '') {
        hayErrores = true
        break
      }
    }
  
    if (!hayErrores) {
      // Mostrar el cartel emergente con la información cargada en el formulario
      const datosFormulario = {
        nombreCompleto: nombreCompletoInput.value.trim(),
        email: emailInput.value.trim(),
        // Agrega aquí los demás campos del formulario
      }
  
      // Aquí puedes mostrar el cartel emergente o enviar los datos a través de una petición AJAX, por ejemplo
      alert('Formulario enviado correctamente: ' + JSON.stringify(datosFormulario));
      form.reset()
    } else {
      alert('Por favor, corrija los errores en el formulario.')
    }
  }