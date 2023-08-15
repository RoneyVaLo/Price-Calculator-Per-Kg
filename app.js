// Obtén referencias a los elementos de entrada y salida
const kgInput = document.getElementById('kg');
const priceInput = document.getElementById('price');
const totalPriceOutput = document.getElementById('total');
const incrementPrice = document.getElementById('increment-price');
const decrementPrice = document.getElementById('decrement-price');


// Agrega manejadores de eventos de para botones de cambio de precio
incrementPrice.addEventListener('click', () => {
    const { value } = priceInput;
    priceInput.value = Number(value) + 5;
    calcularPrecioTotal();
});
decrementPrice.addEventListener('click', () => {
    const { value } = priceInput;
    if (Number(value) > 0) {
        priceInput.value = Number(value) - 5;
        calcularPrecioTotal();
    };
});

// Agrega manejadores de eventos de cambio
kgInput.addEventListener('change', calcularPrecioTotal);
kgInput.addEventListener('blur', calcularPrecioTotal);

priceInput.addEventListener('change', calcularPrecioTotal);
priceInput.addEventListener('blur', calcularPrecioTotal);


// Función para calcular el precio total
function calcularPrecioTotal() {
    const kilogramos = Number(kgInput.value) || 0;
    const precioPorKilo = Number(priceInput.value) || 0;
    const total = kilogramos * precioPorKilo;

    totalPriceOutput.textContent = `\u20A1 ${total}`;
}

// Calcula el precio total inicial al cargar la página
calcularPrecioTotal();
