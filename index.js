
const pizzas = [
    { id: 1, nombre: "Pizza Margarita", imagen: "img/margarita.jpg", precio: 10 },
    { id: 2, nombre: "Pizza Muzzarella", imagen: "img/muzzarella.jpg", precio: 10 },
    { id: 3, nombre: "Pizza Rúcula", imagen: "img/rucula.jpg", precio: 10 },
    { id: 4, nombre: "Pizza Cuatro Quesos", imagen: "img/cuatroquesos.jpg", precio: 10 },
    
   
];


function buscarPizzaPorId(id) {
    return pizzas.find(pizza => pizza.id === id);
}

function renderizarPizza(pizza) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `
        <div class="pizza-card">
            <h2>${pizza.nombre}</h2>
            <img src="${pizza.imagen}" alt="${pizza.nombre}">
            <p>Precio: $${pizza.precio}</p>
        </div>
    `;
}

const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que se recargue la página
    const pizzaId = parseInt(document.getElementById('pizza-id').value);
    
    if (!isNaN(pizzaId)) {
        const pizzaEncontrada = buscarPizzaPorId(pizzaId);
        if (pizzaEncontrada) {
            
            renderizarPizza(pizzaEncontrada);
            
            localStorage.setItem('ultimaPizza', JSON.stringify(pizzaEncontrada));
        } else {
            
            const resultContainer = document.getElementById('result-container');
            resultContainer.innerHTML = '<p class="error">Pizza no encontrada</p>';
        }
    } else {
        
        const resultContainer = document.getElementById('result-container');
        resultContainer.innerHTML = '<p class="error">Ingrese un número válido</p>';
    }
});


window.addEventListener('load', function () {
    const ultimaPizza = JSON.parse(localStorage.getItem('ultimaPizza'));
    if (ultimaPizza) {
        renderizarPizza(ultimaPizza);
    }
});
