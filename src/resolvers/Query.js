const films = async (_, { search, year, type }, { dataSources }) => {
    let data = await dataSources.omdbAPI.getMoviesBySearch(search, year, type);
    return data.Search;
};

const film = async (_, args, { dataSources }) => {
    let data = await dataSources.omdbAPI.getMovieByID(args.id);
    return data;
};

module.exports = {
    films,
    film
}