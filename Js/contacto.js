
const formulario = document.querySelector("form");
const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("pass");
const provinciaInput = document.getElementById("provincia");
const passToggle = document.getElementById("pass-toggle"); 


function validarFormulario(event) {
    event.preventDefault(); 

    let valido = true; 
    limpiarErrores();

    const nombreRegex = /^[A-Za-záéíóúÁÉÍÓÚñÑ ]+$/;
    if (!nombreRegex.test(nombreInput.value.trim())) {
        mostrarError(nombreInput, "El nombre solo debe contener letras y espacios.");
        valido = false;
    }


    const apellidoRegex = /^[A-Za-záéíóúÁÉÍÓÚñÑ ]+$/;
    if (!apellidoRegex.test(apellidoInput.value.trim())) {
        mostrarError(apellidoInput, "El apellido solo debe contener letras y espacios.");
        valido = false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(emailInput.value)) {
        mostrarError(emailInput, "Por favor, ingresa un email válido.");
        valido = false;
    }


    const passRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()+\-_])[A-Za-z0-9!@#$%^&*()+\-_]{8,}$/;
    if (!passRegex.test(passInput.value)) {
        mostrarError(passInput, "La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un signo especial.");
        valido = false;
    }

   
    if (provinciaInput.value === "") {
        mostrarError(provinciaInput, "Debes seleccionar una provincia.");
        valido = false;
    }

   
    if (valido) {
        console.log("Datos del formulario:");
        console.log("Nombre:", nombreInput.value.trim());
        console.log("Apellido:", apellidoInput.value.trim());
        console.log("Email:", emailInput.value.trim());
        console.log("Contraseña:", passInput.value); 
        console.log("Provincia:", provinciaInput.value);

    
        formulario.submit();
    }
}


function mostrarError(campo, mensaje) {
    const errorElement = document.createElement("div");
    errorElement.classList.add("error-message");
    errorElement.textContent = mensaje;

    campo.style.borderColor = "red"; 
    campo.parentElement.appendChild(errorElement); 
}


function limpiarErrores() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((msg) => msg.remove()); 

    
    const inputs = document.querySelectorAll("input, select");
    inputs.forEach((input) => {
        input.style.borderColor = ""; 
    });
}


passToggle.addEventListener("click", function() {
    if (passInput.type === "password") {
        passInput.type = "text"; 
        passToggle.textContent = "👁️"; 
    } else {
        passInput.type = "password"; 
        passToggle.textContent = "👁️‍🗨️"; 
    }
});
formulario.addEventListener("submit", validarFormulario);
