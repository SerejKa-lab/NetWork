import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/appReducer';
import styles from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import Error404 from './Components/Error404/Error404';
import Preloader from './Components/Common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));

const SuspenseComponent = (Component) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Component />
        </Suspense>
    )
}

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader />
        return (
            <div className={styles.app_wrapper}>
                <HeaderContainer />
                <section className={styles.app}>
                    <Navbar />
                    <section className={styles.mainPage_content}>
                        <Switch>
                            <Redirect exact from='/' to='/profile'/>
                            {/* <Route path='/' exact><Redirect to='/profile'/></Route> */}
                            <Route path='/login' component={Login} />
                            <Route path='/profile/:userId?' exact render={() => SuspenseComponent(ProfileContainer)} />
                            <Route path='/dialogs/:name?' exact render={() => SuspenseComponent(DialogsContainer)} />
                            <Route path='/users' exact render={() => SuspenseComponent(UsersContainer)} />
                            <Route path='/music' exact component={Music} />
                            <Route path='/settings' exact component={Settings} />
                            <Route path='/news' exact component={News} />
                            <Route component={Error404}/>
                        </Switch>
                    </section>
                </section>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);

