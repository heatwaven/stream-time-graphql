require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const OmdbAPI = require('./datasources/omdbApi');
const fs = require('fs');
const path = require('path');

const resolvers = require('./resolvers');


const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
    dataSources: () => {
        return {
            omdbAPI: new OmdbAPI()
        }
    },
});

server.listen().then(({ url }) => console.log("run at " + url))