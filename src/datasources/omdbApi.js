const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = ' http://www.omdbapi.com/';
    }

    getMoviesBySearch(search) {
        return this.get(`?s=${search}&apikey=${process.env.API_KEY}`);
    }
}
module.exports = TrackAPI;
