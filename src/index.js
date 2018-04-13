import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from "react-router-dom";
import { client } from './apollo/configuration';

import App from './components/App';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Router>
    <ApolloProvider client={client} >
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('app')
);
