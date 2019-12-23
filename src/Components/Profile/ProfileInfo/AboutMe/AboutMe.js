import React from 'react';
import styles from './AboutMe.module.css'


class AboutMe extends React.Component {


    render() {
        const { fullName, aboutMe } = this.props;

        return (
            <div className={styles.aboutMeBlock}>
                <div className={styles.fullNameWrapper}>
                    <h2>{fullName}</h2>
                </div>
                <p className={styles.aboutMe}>{aboutMe}</p>
            </div>
        )
    }
}

export default AboutMe