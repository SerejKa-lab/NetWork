import React from 'react';
import styles from './LookingForAJob.module.css'


const LookingForAJob = (props) => {

    const { lookingForAJob, LFAJDescription } = props

    return(
        lookingForAJob
            ? <div className={styles.lookingForAJob}>
                <img alt='lookingForAJob' src={require('../../../../Assets/Images/lookingForAJob.png')} />
                <div className={styles.LFAJ_descriprion}>
                    <span className={styles.LFAJ_descriprion_header}>Looking for a vacancy:</span>
                    <span className={styles.LFAJ_descriprion_vacancy}>{LFAJDescription}</span>
                </div>
            </div>
            : <div></div>
    )
}

export default LookingForAJob