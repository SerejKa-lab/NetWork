import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/State'



let renderEntireTree = (state) => {
    ReactDOM.render( 
        <App state = { state } dispatch = { store.dispatch.bind( store ) } />, 
        document.getElementById('root') 
    );
};

renderEntireTree( store.getState() );

store.subscriber( renderEntireTree );

serviceWorker.unregister();
