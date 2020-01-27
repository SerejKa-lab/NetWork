import React from 'react'
import error from '../../../Assets/Images/error.png'
import styles from './CommonError.module.css'


const CommonError = (props) => {

    return (
        <div className={styles.commonError}>
            <img src={error} alt='error icon' />
            <div className={styles.messages}>
                <span>Something went wrone...</span>
                <span className={styles.errorMessage}>{props.errorMessage}</span>
            </div>
        </div>
    )
}

export default CommonError