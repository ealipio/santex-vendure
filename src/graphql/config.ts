import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
  from,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://demo.vendure.io/shop-api',
});

const afterSetTokenLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext();
    const authHeader = context.response.headers.get('vendure-auth-token');
    if (authHeader) {
      localStorage.setItem('auth-token', authHeader);
    }
    return response;
  });
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem('auth-token')}`,
    },
  }));

  return forward(operation);
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),

  link: from([authMiddleware, afterSetTokenLink, httpLink]),
});
