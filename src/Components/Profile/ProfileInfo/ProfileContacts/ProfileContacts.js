import React from 'react';
import styles from './ProfileContacts.module.css'


const ProfileContacts = (props) => {

    const {contacts} = props;

    const getContacts = () => {        // create array of completed contacts
        let contactsArr = [];
        for (let key in contacts) {
            if (contacts[key]) {
                const nextContact =
                    <li className={styles.contact} key={key}>
                        <a href={contacts[key]}
                            target='_blank' rel='noopener noreferrer'>{key} </a>
                    </li>
                contactsArr = [...contactsArr, nextContact]
            }
        }
        return contactsArr
    }

    const contactsArr = getContacts()

    return (
        contactsArr.length
            ? <div className={styles.contactsBlock}>
                <p className={styles.contactsHeader}>Contacts:</p>
                <ul className={styles.contacts}>
                    {contactsArr}
                </ul>
            </div>
            : null
    )
}

export default ProfileContacts