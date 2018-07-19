const eventbrite = new EventBrite();
const ui = new UI();

// Listener al buscador
document.getElementById('searchBtn').addEventListener('click', (e) => {
    e.preventDefault();

    // Leer el terxo del input search
    const searchText = document.getElementById("event").value;

    // Leer el select
    const categories = document.getElementById("categories-list");
    const selectedCategory = categories.options[categories.selectedIndex].value;

    // Revisar que haya algo escrito en el buscador
    if(searchText !== '') {
        console.log('Buscando...');
    } else {
        ui.showMessage('Escribe algo en el buscador', 'alert alert-danger mt-4');
    }
})
