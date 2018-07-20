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
        eventbrite.getEvents(searchText, selectedCategory)
            .then(events => {
                if(events.events.events.length > 0) {
                    // Si hay eventos
                    ui.clearResults();
                    ui.showEvents(events.events)
                } else {
                    // No hay eventos, mostrar un alerta
                    ui.showMessage('No hay resultados', 'alert alert-danger mt-4');
                }
            })
    } else {
        ui.showMessage('Escribe algo en el buscador', 'alert alert-danger mt-4');
    }
})
