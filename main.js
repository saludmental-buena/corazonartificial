function User(){
    username = document.getElementById("username").value;

    localStorage.setItem("username", username);

    window.location = "sala.html";
    // No se guarda la informacion del usuario
}
document.getElementById('corazon').addEventListener('submit', function(event) {
    // Obtener el valor del input
    const nombreInput = document.getElementById('User');

    // Verificar si el input está vacío
    if (nombreInput.value.trim() === '') {
        // Prevenir que el formulario se envíe
        event.preventDefault();

        // Mostrar un mensaje de advertencia
        alert('Por favor, rellena el campo de nombre, Gracias :)');
        // Esto lo escribo por si acaso ekisde
        // Recalco que esto no funciona en dispositivos moviles y aveces funciona en computadora
    }
    // Todas estas funciones son solo para los botones que redirigen a una zona de la pagina en especifico
});
function salir(){
    window.location = "index.html";
  }
  function ie(){
    window.location = "identificar.html"
  }
  function ie2(){
    window.location = "identificar2.html"
  }
  function des(){
    window.location = "cuestionario.html"
  }
  function regresar(){
    window.location = "sala.html"
  }