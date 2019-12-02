import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';


const App = () => {
    return (
        <BrowserRouter>
            <section className='app'>
                <Header />
                <Navbar />
                <section className='content-wrapper'>
                    <Route path='/dialogs' component={DialogsContainer} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/users' component={UsersContainer} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                    <Route path='/news' component={News} />
                </section>
            </section>
        </BrowserRouter>
    );
}



export default App;

