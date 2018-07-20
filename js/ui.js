class UI {
    constructor() {
        // Inicializa la app al instanciarla
        this.init();
        // Leer el resultado
        this.list = document.getElementById('events-result');
    }
    // Método para cuando inicialice la app
    init() {
        // Llamar a imprimir categorias de las REST API
        this.printCategories();
    }

    // Imprimir categorías
    printCategories() {
        const categoriesList = eventbrite.getCategories()
            .then(categories => {
                const cats = categories.categories.categories;
                // Seleccionar el selector de categorias
                const selectCategory = document.getElementById("categories-list");

                //Recorremos el arreglo e imprimimos los <option>
                cats.forEach(cat => {
                    const option = document.createElement('option');
                    option.value = cat.id;
                    option.appendChild(document.createTextNode(cat.name_localized));
                    selectCategory.appendChild(option);
                })
            })
    }

    // Lee la respuesta de la API e imprime los resultados
    showEvents(events) {
        // Lee los eventos y agregalos a una variable
        const eventsList = events.events;

        // Recorrer los eventos y crear su template
        eventsList.forEach(event => {
            this.list.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img class="fluid mb-2" src="${event.logo !== null ? event.logo.url : ""}" >
                    </div>
                    <div class="card-body">
                        <div class="card-text">
                            <h2 class="text-center">${event.name.text}</h2>
                            <p class="lead text-info">${event.description.text.substring(0,280)}...</p>
                            <span class="badge badge-primary">Capacidad :${event.capacity}</span>
                            <span class="badge badge-primary">Fecha y hora :${event.start.local}</span>
                            <a class="btn btn-primary btn-block mt-4" href="${event.url}" target="_blank">Comprar boletos</a>
                        <div>
                    </div>
                </div>
            `;
        })
    }

    //Limpia los resultados previos
    clearResults() {
        this.list.innerHTML = '';
    }

    // Metodo para imprimir mensajes
    showMessage(message, classList) {
        const div = document.createElement('div');
        div.classList = classList;
        // Agregar texto
        div.appendChild(document.createTextNode(message));
        // Buscar un padre
        const searchDiv = document.querySelector('#search');
        searchDiv.appendChild(div);
        // Quitar el alert despues de 3 segundos
        setTimeout(() => {
            this.clearMessage();
        }, 3000);
    }

    // Desaparece el mensaje en caso de que exista
    clearMessage() {
        const alert = document.querySelector('.alert');
        if(alert) {
            alert.remove();
        }
    }
}