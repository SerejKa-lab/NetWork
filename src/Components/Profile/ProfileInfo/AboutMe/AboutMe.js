import React from 'react';
import styles from './AboutMe.module.css'
import { connect } from 'react-redux';
import { changeMyStatus } from '../../../../Redux/profileReducer'


class AboutMe extends React.Component {

    state = {
        editMode: false,
        status: '',
        inputError: false,
        maxStatusLength: 300
    }

    setEditMode = () => {
        if (this.props.userId === this.props.myId ) {
            this.setState({ editMode: true, status: this.props.status })
        }
    }

    setDisplayMode = () => {
        this.setState({ editMode: false })
    }

    toggleInputError = () => {
        const { status, maxStatusLength, inputError } = this.state
        if (inputError && status.length <= maxStatusLength) {
            this.setState({ inputError: false })
        }
        if (status.length > maxStatusLength) this.setState({ inputError: true })
    }

    setStatus = (e) => {
        this.setState({ status: e.currentTarget.value }, this.toggleInputError )
    }

    setStatusOnKey = (e) => {
        if (e.keyCode === 27) this.setDisplayMode()
        if (e.key === 'Enter' && !this.state.inputError && this.state.status !== this.props.status ) {
            this.props.changeMyStatus(this.state.status)
            this.setDisplayMode()
        }
        if (e.key === 'Enter' && !this.state.inputError && this.state.status === this.props.status ) {
            this.setDisplayMode()
        }
    }

    render() {
        const { fullName, aboutMe, status } = this.props;
        const fullNameWrapper = aboutMe ? styles.fullNameWrapper__underline : styles.fullNameWrapper;
        const statusValue = (this.props.userId === this.props.myId && !status)
            ? 'set status'
            : status
        const statusInputClass = this.state.inputError ? styles.inputError : ''

        return (
            <div className={styles.aboutMeBlock}>
                <div className={fullNameWrapper}>
                    <h2>{fullName}</h2>
                    {this.state.editMode
                        && <input 
                            className={statusInputClass}
                            onChange={this.setStatus} 
                            autoFocus={true}
                            onBlur={this.setDisplayMode}
                            onKeyDown={this.setStatusOnKey}
                            value={this.state.status} />
                    }
                    { statusValue && !this.state.editMode
                        && <span onDoubleClick={this.setEditMode} className={styles.statusValue}>
                            {statusValue}
                        </span>
                    }
                </div>
                {aboutMe && <p className={styles.aboutMe}>{aboutMe}</p>}
            </div>
        )
    }
}

export default connect(null, {changeMyStatus})(AboutMe)