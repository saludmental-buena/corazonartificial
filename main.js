function User(){
    username = document.getElementById("username").value;

    localStorage.setItem("username", username);

    window.location = "pinion.html";
}
document.getElementById('corazon').addEventListener('submit', function(event) {
    // Obtener el valor del input
    const nombreInput = document.getElementById('User');

    // Verificar si el input está vacío
    if (nombreInput.value.trim() === '') {
        // Prevenir que el formulario se envíe
        event.preventDefault();

        // Mostrar un mensaje de advertencia
        alert('Por favor, rellena el campo de nombre');
    }
});
