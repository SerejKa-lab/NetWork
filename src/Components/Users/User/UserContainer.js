import React from 'react';
import { connect } from 'react-redux'
import User from './User';
import { setFollow } from '../../../Redux/usersReducer'

const UserContainer = (props) => {
    return (
        <User { ...props } />
    )
}

export default connect(null, { setFollow } )(UserContainer);