import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/reduxStore';
import { Provider } from 'react-redux';



let renderEntireTree = () => {
    ReactDOM.render( 
        <Provider store = { store }>
            <App store = { store } />
        </Provider>, document.getElementById('root') );
};

renderEntireTree( store.getState() );

store.subscribe( renderEntireTree );

serviceWorker.unregister();
