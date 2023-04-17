// obtener elementos del DOM
const eventos = document.getElementById('eventos');
const formulario = document.getElementById('agregar-evento');
const tituloInput = document.getElementById('titulo');
const fechaInput = document.getElementById('fecha');
const horaInicioInput = document.getElementById('hora-inicio');
const horaFinInput = document.getElementById('hora-fin');
const descripcionInput = document.getElementById('descripcion');

// agregar evento al DOM
function agregarEvento(evento) {
  const eventoElemento = document.createElement('li');
  eventoElemento.classList.add('evento');
  eventoElemento.innerHTML = `
    <h3>${evento.titulo}</h3>
    <div class="hora">${evento.horaInicio} - ${evento.horaFin}</div>
    <div class="descripcion">${evento.descripcion}</div>
    <button class="eliminar">Eliminar</button>
  `;
  eventos.appendChild(eventoElemento);
  const eliminarBoton = eventoElemento.querySelector('.eliminar');
  eliminarBoton.addEventListener('click', () => {
    eventoElemento.remove();
  });
}

// manejar envío del formulario
formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  const titulo = tituloInput.value;
  const fecha = fechaInput.value;
  const horaInicio = horaInicioInput.value;
  const horaFin = horaFinInput.value;
  const descripcion = descripcionInput.value;
  const evento = { titulo, fecha, horaInicio, horaFin, descripcion };
  agregarEvento(evento);
  formulario.reset();
});
