import React from 'react'
import Page from '../components/Page'
import './ContactPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContactData } from '../data/ContactData'

export default () => {
    const contacts = ContactData.map((item, index) => {
        return <a href={item.link} className="contact-link" key={index}>
                <div className="contact-card">
                    <FontAwesomeIcon className="contact-icon" icon={item.icon}></FontAwesomeIcon>
                    <p>{item.title}</p>                   
                </div>
            </a>
    })

    const body = <div className="body-content">
        <p className="contact-subtitle">You can find me at: </p>
        {contacts}
    </div>

    return (
        <Page header={<h1>Contact</h1>} body={body}></Page>
    )
}