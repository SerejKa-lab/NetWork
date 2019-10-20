import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wraper'>
                <Header />
                <Navbar />
                <div className='content-wrapper'>
                    <Route path='/dialogs' component={Dialogs} />

                    <Route path='/profile' render= { () => <Profile postsData = {props.postsData}/>}  />

                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/news' component={News}/>
                </div>
            </div>
        </BrowserRouter>
    );
}



export default App;

