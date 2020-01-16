import React, { useState } from 'react';
import styles from './AboutMe.module.css'
import { connect } from 'react-redux';
import { changeMyStatus } from '../../../../Redux/profileReducer'
import Preloader from '../../../Common/Preloader/Preloader';


const AboutMe = (props) => {

    const [editMode, setMode] = useState(false);
    const [inputError, setError] = useState(false);
    const [hookStatus, setHookStatus] = useState('');
    const [maxStatusLength] = useState(300)

    const setEditMode = () => {
        if (props.userId === props.myId) {
            setMode(true)
            setHookStatus(props.status)
        }
    }

    const setDisplayMode = () => {
        setMode(false)
    }

    const toggleInputError = (statusLength) => {
        if (inputError && statusLength <= maxStatusLength) {
            setError(false)
        }
        if (statusLength > maxStatusLength) setError(true)
    }

    const setStatus = (e) => {
        setHookStatus(e.currentTarget.value)
        toggleInputError(e.currentTarget.value.length)
    }

    const setStatusOnKey = (e) => {
        if (e.keyCode === 27) setDisplayMode()
        if (e.key === 'Enter' && !inputError && hookStatus !== props.status) {
            props.changeMyStatus(hookStatus)
            setDisplayMode()
        }
        if (e.key === 'Enter' && !inputError && hookStatus === props.status) {
            setDisplayMode()
        }
    }

    const { fullName, aboutMe, statusIsLoading } = props;
    const fullNameWrapper = aboutMe ? styles.fullNameWrapper__underline : styles.fullNameWrapper;
    const statusInputClass = inputError ? styles.inputError : ''

    return (
        <div className={styles.aboutMeBlock}>
            <div className={fullNameWrapper}>
                <h2>{fullName}</h2>
                {editMode               //status edit mode
                    && <input
                        className={statusInputClass}
                        onChange={setStatus}
                        autoFocus={true}
                        onBlur={setDisplayMode}
                        onKeyDown={setStatusOnKey}
                        value={hookStatus} />
                }
                {props.status && !editMode && !statusIsLoading      //status display mode
                    && <span onDoubleClick={setEditMode} className={styles.statusValue}>
                        {props.status}
                    </span>
                }
                {!props.status && !editMode && !statusIsLoading && props.userId === props.myId
                    && <button onClick={setEditMode}>Set status</button>        //empty status mode
                }
                {statusIsLoading && <Preloader height='25px' />}        {/* status isLoading mode */}
            </div>
            {aboutMe && <p className={styles.aboutMe}>{aboutMe}</p>}
        </div>
    )
}

export default connect(null, { changeMyStatus })(AboutMe)