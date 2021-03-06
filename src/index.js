import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Main from './myApp/00-main'

import Client from 'aws-appsync'
import { Rehydrated } from 'aws-appsync-react'
import { ApolloProvider as Provider} from 'react-apollo'
import {StripeProvider} from 'react-stripe-elements';

import config from './appsync'

const client = new Client({
    url: config.graphqlEndpoint,
    region: config.region,
    auth: {
        type: config.authenticationType,
        apiKey: config.apiKey
    }
});

const WithProvider = () => (
    <Provider client={client}>
    <StripeProvider apiKey="pk_test_FZnBzWtsMlBFsdKBrVaznML9">
    <Rehydrated>
        <Main />
    </Rehydrated>
    </StripeProvider>
    </Provider>
);

ReactDOM.render(< WithProvider/>, document.getElementById('root'));

