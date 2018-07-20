class EventBrite {
    constructor() {
        this.token_auth = "GFIVDFE3UU63DT5EOE6F";
        this.order = 'date';
    }
    //Mostrar resultados de la búsqueda
    async getEvents(event, category) {
        const responseEvent = await fetch
            (`https://www.eventbriteapi.com/v3/events/search/?q=${event}&sort_by=${this.order}&categories=${category}&token=${this.token_auth}`);

            // Esperar la respuesta del evento y devolverla como JSON
            const events = await responseEvent.json();

            return {
                events
            }
    }

    // Obtiene las categorias en init
    async getCategories() {
        // Consultar las categorias a la REST API de event brite
        const responseCategories = await fetch
            (`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

            // Esperar la respuesta de las categorias y devolver un JSON
            const categories = await responseCategories.json();
            // Devolvemos el resultado
            return {
                categories
            }
    }
}