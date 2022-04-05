const { RESTDataSource } = require('apollo-datasource-rest');

class OmdbAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = ' http://www.omdbapi.com/';
    }

    getMoviesBySearch(search, year = "", type = "") {
        return this.get(`?s=${search}&apikey=${process.env.API_KEY}&y=${year}&type=${type}`);
    }

    getMovieByID(id) {
        return this.get(`?i=${id}&apikey=${process.env.API_KEY}`);
    }
}
module.exports = OmdbAPI;
