const { RESTDataSource } = require('apollo-datasource-rest');

class OmdbAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = ' http://www.omdbapi.com/';
    }

    getMoviesBySearch(search) {
        return this.get(`?s=${search}&apikey=${process.env.API_KEY}`);
    }

    getMovieByID(id){
        return this.get(`?i=${id}&apikey=${process.env.API_KEY}`);
    }
}
module.exports = OmdbAPI;
