import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Данные для отрисовки в постах профиля
const postsData = [
    {
        name: 'Pavel', message: 'Hi. I am fine. Thank you!', like: '15', id: 'Pavel',
        profileImage: 'https://multik.online/wp-content/uploads/2019/07/1562444283_main_2x.jpg'
    },
    {
        name: 'Yuriy', message: 'Hello! How are you', like: '10', id: 'Yuriy',
        profileImage: 'https://multik.online/wp-content/uploads/2019/07/1562444283_main_2x.jpg'
    },
    {
        name: 'Katya', message: 'Would you like a cup of tee?', like: '17', id: 'Katya',
        profileImage: 'https://multik.online/wp-content/uploads/2019/07/1562444283_main_2x.jpg'
    },
    {
        name: 'Masha', message: "No, i'd like a glass of juice.", like: '17', id: 'Masha',
        profileImage: 'https://multik.online/wp-content/uploads/2019/07/1562444283_main_2x.jpg'
    },
    {
        name: 'EasyMan', message: 'Ok. Here it is!', like: '17', id: 'EasyMan',
        profileImage: 'https://multik.online/wp-content/uploads/2019/07/1562444283_main_2x.jpg'
    }
];



ReactDOM.render(<App postsData = {postsData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
