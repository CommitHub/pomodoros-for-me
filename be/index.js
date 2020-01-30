const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

  type User {
    firstName: String,
    lastName: String,
    email: String,
  }

  type Query {
    users: [User]
  }
`;


const users = [
  {
    firstName: 'Luis',
    lastName: 'Alvarez',
    email: 'luis.alvarez@commithub.com'
  }
];

const resolvers = {
  Query: {
    users: () => users,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
