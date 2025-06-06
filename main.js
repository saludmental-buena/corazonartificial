function User(){
    username = document.getElementById("username").value;

    localStorage.setItem("username", username);

    window.location = "sala.html";
    // No se guarda la informacion del usuario
}
document.getElementById('corazon').addEventListener('submit', function(event) {
    // Obtener el valor del input
    const nombreInput = document.getElementById('User');
  
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