class EventBrite {
    constructor() {
        this.token_auth = "GFIVDFE3UU63DT5EOE6F";
        this.order = 'date';
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