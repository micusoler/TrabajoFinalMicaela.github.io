
let nombre = document.querySelector("#nombre");
let correo = document.querySelector("#correo");

nombre.addEventListener("input", function (e) {
  e.preventDefault();
});

correo.addEventListener("input", function (e) {
  e.preventDefault();
});

let informacion = document.querySelector(".informacion");

let datos = JSON.parse(localStorage.getItem("mensaje")) || []

const mensaje = informacion.addEventListener("submit", function (e) {
  e.preventDefault(); 
  
  informacionUsuario.innerHTML = `
  <div> <h5> ${nombre.value}, te informo que recibi correctamente tus comentarios, me estare comunicando al correo ${correo.value}.</h5> </div>
  `;
  
  setTimeout(() => {
    console.log ("Proceso finalizado")
  }, 3000);

});

let informacionUsuario = document.querySelector(".informacionUsuario");

const enviarinfo = document.querySelector (".enviar")
enviarinfo.addEventListener("click", function () {
  Swal.fire({
    position: 'top-up',
    icon: 'success',
    title: 'Se ha enviado con exito',
    showConfirmButton: false,
    timer: 950
  })

}
)
