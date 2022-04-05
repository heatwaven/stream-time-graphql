const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');
const OmdbAPI = require('./datasources/omdbApi');
require('dotenv').config();

const Query = require('./resolvers/Query');
const Film = require('./resolvers/Film');

const resolvers = {
    Query,
    Film
}


const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
    dataSources: () => {
        return{
           omdbAPI: new OmdbAPI()
        }
    }
});

server.listen().then(({ url }) => console.log("run at " + url))