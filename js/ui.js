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