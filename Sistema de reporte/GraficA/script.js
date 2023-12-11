// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");

// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"]

// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosVentas2023 = {
    label: "Total de ventas",
    data: [31000, 12200, 8200, 10300, 21600], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(46, 8, 84, 0.2)', // Color de fondo
    borderColor: 'rgba(75, 0, 130, 1)', // Color del borde
    borderWidth: 3.5,// Ancho del borde
};
new Chart($grafica, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            datosVentas2023,
            // Aquí más datos...
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});