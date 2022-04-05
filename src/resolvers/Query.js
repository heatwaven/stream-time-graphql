const films = async (_, args, { dataSources }) => {
    let data = await dataSources.omdbAPI.getMoviesBySearch(args.search);
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