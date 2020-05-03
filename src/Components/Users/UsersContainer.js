import React from 'react';
import { connect } from 'react-redux';
import { setUsers } from '../../Redux/usersReducer';
import Users from './Users';


class UsersContainer extends React.Component {
    componentDidMount() {
        document.addEventListener('scroll', this.endlessScroll)
        if (this.props.users.length === 0) this.props.setUsers(this.props.currentPage)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.endlessScroll)
    }

    state = {
        usersLoading: false
    }

    endlessScroll = async() => {
        
        const { currentPage, pagesCount, setUsers } = this.props;
        const { usersLoading } = this.state;
        const docEl = document.documentElement;
        const scrollBottom = docEl.scrollHeight - docEl.scrollTop - docEl.clientHeight;
        if (scrollBottom < 100 && currentPage < pagesCount && !usersLoading) {
            this.setState({ usersLoading : true }); 
            await setUsers(currentPage + 1, true);
            this.setState({ usersLoading: false })
        }
    }

    render() {
        return (
            <Users {...this.props} />
        )
    }

}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        pagesCount: state.usersPage.pagesCount,
        isLoading: state.usersPage.isLoading
    }
}


export default connect(mapStateToProps, { setUsers } )(UsersContainer);