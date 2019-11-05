import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, { subscriber, addPost, setPostText } from './Redux/State'



let renderEntireTree = (state) => {
    ReactDOM.render(
        <App state = {state} addPost = { addPost } setPostText ={ setPostText } />, 
        document.getElementById('root')
    );
};

renderEntireTree( state );

subscriber( renderEntireTree );

serviceWorker.unregister();
