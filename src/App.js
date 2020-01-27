import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/appReducer';
import styles from './App.module.css';
import toTopImg from './Assets/Images/top.png';
import Navbar from './Components/Navbar/Navbar';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import Error404 from './Components/Errors/Error404/Error404';
import Preloader from './Components/Common/Preloader/Preloader';
import CommonError from './Components/Errors/CommonError/CommonError';

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
        document.addEventListener('scroll', this.scrollHandler)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scrollHandler)
    }

    state = {
        toTop: false
    }

    scrollHandler = (e) => {
        if (window.pageYOffset > 300 && !this.state.toTop) {
            this.setState({ toTop: true })
        }
        if (window.pageYOffset <= 300 && this.state.toTop) {
            this.setState({ toTop: false })
        }
    }

    srollToTop = () => {
        const step = window.pageYOffset / 2;
        let timerId = setInterval(() => {
            window.scrollBy(0, -step)
            if (window.pageYOffset - step <= 0) {
                clearInterval(timerId)
                window.scrollTo(0, 0)
            }
        }, 100)

    }

    render() {
        const {error} = this.props;
        const errorMessage = error ? error.message : null

        if (!this.props.initialized) return <Preloader />
        const buttonStyle = this.state.toTop ? styles.visible : styles.hidden
        return (
            <div className={styles.app_wrapper}>
                <HeaderContainer />
                {error && <CommonError errorMessage={errorMessage}/>}
                <section className={styles.app}>
                    <Navbar />
                    <section className={styles.mainPage_content}>
                        <div className={`${styles.toTop} ${buttonStyle}`} onClick={this.srollToTop}>
                            <img src={toTopImg} alt='arrow' />
                            <span>Top</span>
                        </div>
                        <Switch>
                            <Redirect exact from='/' to='/profile' />
                            {/* <Route path='/' exact><Redirect to='/profile'/></Route> */}
                            <Route path='/login' component={Login} />
                            <Route path='/profile/:userId?' exact render={() => SuspenseComponent(ProfileContainer)} />
                            <Route path='/dialogs/:name?' exact render={() => SuspenseComponent(DialogsContainer)} />
                            <Route path='/users' exact render={() => SuspenseComponent(UsersContainer)} />
                            <Route path='/music' exact component={Music} />
                            <Route path='/settings' exact component={Settings} />
                            <Route path='/news' exact component={News} />
                            <Route component={Error404} />
                        </Switch>
                    </section>
                </section>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    error: state.errors.error
})

export default connect(mapStateToProps, { initializeApp })(App);

