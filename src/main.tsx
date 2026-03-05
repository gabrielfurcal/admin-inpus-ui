import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: `${import.meta.env.VITE_GRAPHQL_URL}/graphql`
  }),
  cache: new InMemoryCache()
})

root.render(
  <BrowserRouter>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
