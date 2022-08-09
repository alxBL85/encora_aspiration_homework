import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/index';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
require('dotenv').config();


const apolloClient = new ApolloClient({
uri: 'https://api.github.com/graphql',
cache: new InMemoryCache(),
headers: {
  authorization: `bearer ${process.env?.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
}
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ApolloProvider client={apolloClient}>
      <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
