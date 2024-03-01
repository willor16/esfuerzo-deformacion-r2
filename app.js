// Selecciona los elementos del DOM
var botonSeleccionar = document.querySelector('.datos-maquina button');
var botonIngresarDatos = document.querySelector('.datos-lata button');
var selectorPlaca = document.querySelector('#tipo-placa-selector');
var inputsLata = document.querySelectorAll('.datos-lata input');

// Variable para guardar los datos
var tipoPlacaSeleccionada;
var datosLata = {};

// Escucha el evento de clic en el botón Seleccionar
botonSeleccionar.addEventListener('click', function() {
    tipoPlacaSeleccionada = selectorPlaca.value;
    console.log('Placa seleccionada: ' + tipoPlacaSeleccionada);
    // Guarda la placa seleccionada en el almacenamiento local
    localStorage.setItem('selectedPlaca', tipoPlacaSeleccionada);
});

// Escucha el evento de clic en el botón Ingresar datos
botonIngresarDatos.addEventListener('click', function() {
    inputsLata.forEach(function(input) {
        datosLata[input.id] = input.value;
    });
    console.log('Datos de la lata: ', datosLata);
    // Guarda los datos de la lata en el almacenamiento local
    localStorage.setItem('data', JSON.stringify(datosLata));
});