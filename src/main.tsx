import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './index.css';

const client = new ApolloClient({
  uri: 'https://demo.vendure.io/shop-api',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
