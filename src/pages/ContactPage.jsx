import React from 'react'
import { FormattedMessage } from 'react-intl'
import Page from '../components/Page'
import './ContactPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContactData } from '../data/ContactData'

const ContactPage = () => {
    const contacts = ContactData.map((item, index) => {
        return <a href={item.link} className="contact-link" key={index}>
                <div className="contact-card">
                    <FontAwesomeIcon className="contact-icon" icon={item.icon}></FontAwesomeIcon>
                    <p>{item.title}</p>                   
                </div>
            </a>
    })

    const body = <div className="body-content">
        <p className="contact-subtitle"><FormattedMessage id="ContactSubTitle"/></p>
        <div className="contact-links">            
            {contacts}
        </div>
    </div>

    return (
        <Page header={<h1><FormattedMessage id="Contact"/></h1>} body={body}></Page>
    )
}

export default ContactPage