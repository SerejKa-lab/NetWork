import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';


const App = () => {
    return (
        <BrowserRouter>
            <section className='app'>
                <HeaderContainer />
                <Navbar />
                <section className='content-wrapper'>
                    <Route path='/' exact component={ProfileContainer} />
                    <Route path='/profile/:userId?' component={ProfileContainer} />
                    <Route path='/dialogs' component={DialogsContainer} />
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

