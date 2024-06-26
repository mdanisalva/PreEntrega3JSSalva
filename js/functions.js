// Obtener la lista de reservas desde localStorage (si existe)
const listaGuardada = localStorage.getItem('listaReservas');
const listaReservas = listaGuardada ? JSON.parse(listaGuardada) : [];

// Mostrar las reservas en el DOM
function mostrarReservas() {
    const lista = document.getElementById('listaReservas');
    lista.innerHTML = ''; // Limpiar la lista antes de volver a mostrar

    listaReservas.forEach((reserva) => {
        const li = document.createElement('li');
        li.textContent = `${reserva.nombre} viajará a ${reserva.destino} el ${reserva.fecha} en el asiento ${reserva.asiento}`;
        lista.appendChild(li);
    });
}

// Reservar pasaje al hacer clic en el botón
const btnReservar = document.getElementById('reservarPasaje');
btnReservar.addEventListener('click', () => {
    const nombrePasajero = document.getElementById('nombrePasajero').value;
    const destino = document.getElementById('destino').value;
    const fechaVuelo = document.getElementById('fechaVuelo').value;
    const asiento = document.getElementById('asiento').value;
    if (nombrePasajero.trim() !== '' && destino.trim() !== '' && fechaVuelo.trim() !== '' && asiento.trim() !== '') {
        const nuevaReserva = new Pasaje(nombrePasajero, destino, fechaVuelo, asiento);
        listaReservas.push(nuevaReserva); // Agregar la reserva a la lista
        localStorage.setItem('listaReservas', JSON.stringify(listaReservas));
        mostrarReservas();
        limpiarCampos();
    }
});

// Función para limpiar los campos de entrada
function limpiarCampos() {
    document.getElementById('nombrePasajero').value = '';
    document.getElementById('destino').value = '';
    document.getElementById('fechaVuelo').value = '';
    document.getElementById('asiento').value = '';
}