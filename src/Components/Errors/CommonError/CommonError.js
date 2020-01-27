import React, { useState, useEffect } from 'react'
import error from '../../../Assets/Images/error.png'
import styles from './CommonError.module.css'


const CommonError = (props) => {

    const [showHint, toggleHint] = useState(false)
    const hintOn = () => toggleHint(true)
    const hintOff = () => toggleHint(false)

    const [showError, toggleError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [showErrorClass, toggleErrorClass] = useState(false)

    const transitionTime = props.delay ? props.delay : 1

    useEffect(() => {
        if (props.errorMessage) {
            setErrorMessage(props.errorMessage)
            toggleError(true)
            toggleErrorClass(true)
        } else {
            toggleErrorClass(false)
            setTimeout(()=>{
                setErrorMessage('')
                toggleError(false)
            }, transitionTime*1000)
        }
    }, [props.errorMessage, transitionTime])

    const errorStyle = showErrorClass ? styles.commonError : styles.commonError + ' ' + styles.hideError
    const transitionStyle = props.delay ? {transition: `${props.delay}s`} : {}

    if (!showError) return <></>
    
    return (
        <div className={errorStyle} onMouseOver={hintOn} 
            onMouseLeave={hintOff} onClick={props.onClick} style={transitionStyle}>
            <img src={error} alt='error icon' />
            <div className={styles.messages}>
                <span>Something went wrone...</span>
                <span className={styles.errorMessage}>{errorMessage}</span>
            </div>
            {showHint && <div className={styles.hint}>{props.hint}</div>}
        </div>
    )
}

export default CommonError