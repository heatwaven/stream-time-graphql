const poster = (parent) => {
    return parent.Poster;
}

const title = (parent) => {
    return parent.Title
}

const imdbID = (parent) => {
    return parent.imdbID;
}

const type = (parent) =>{
    return parent.Type
}

const released = (parent)=>{
    return parent.Released;
}

module.exports = {
    poster,
    title,
    imdbID,
    type,
    released
}