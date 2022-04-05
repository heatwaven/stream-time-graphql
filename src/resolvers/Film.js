const poster = (parent) => {
    return parent.Poster;
}

const title = (parent) => {
    return parent.Title
}

const imdbID = (parent) => {
    return parent.imdbID;
}

module.exports = {
    poster,
    title,
    imdbID
}