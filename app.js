document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente

    var asunto = document.getElementById("asunto").value;
    var message = document.getElementById("message").value;

    // Crear el enlace para enviar el correo
    var mailtoLink = "mailto:lm803113@gmail.com" + // Correo del destinatario
        "?subject=" + encodeURIComponent(asunto) +
        "&body=" + encodeURIComponent(message);

    // Abrir el cliente de correo predeterminado del usuario con el mensaje prellenado
    window.location.href = mailtoLink;
});
