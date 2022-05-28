import { ApolloServer, gql } from "apollo-server-cloud-functions";
import * as functions from 'firebase-functions';

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type TESTS {
    text: String
    uid: String
  }

  type Query {
    tests: [TESTS]
  }
`;

const tests = [
    {
      text: 'Harry Potter and the Chamber of Secrets',
      uid: 'J.K. Rowling',
    },
    {
      text: 'Jurassic Park',
      uid: 'Michael Crichton',
    },
];

const resolvers = {
    Query: {
        tests: () => tests,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({
        headers: req.headers,
        req,
        res
    })
});

exports.graphql = functions.https.onRequest(server.createHandler());