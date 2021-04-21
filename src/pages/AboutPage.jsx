import React from 'react'
import { FormattedMessage } from 'react-intl'
import Page from '../components/Page'
import './AboutPage.css'
import { ToolsData } from '../data/ToolsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutPage = () => {
    const description = <div className="about-description">
        <p><FormattedMessage id="AboutDescription1"/></p> 
        <p><FormattedMessage id="AboutDescription2"/></p> 
        <p><FormattedMessage id="AboutDescription3"/></p> 
    </div>
    const tools = <div className="tools">
        <p className="tools-subtitle"><FormattedMessage id="AboutDescriptionAbilities"/></p>
        <div className="tools-information">
            {ToolsData.map((item, index) => {
                return <div className="tool-card" key={index}>                    
                    <FontAwesomeIcon className="tool-icon" icon={item.icon}></FontAwesomeIcon>
                    <p>{item.name}</p>
                </div>
            })}
        </div>
    </div>
    const body = <div className="about-content">
        {description}
        {tools}
    </div>

    return (
        <Page 
            header={<h1><FormattedMessage id="About Me"/></h1>} 
            body={body}>        
        </Page>                
    )
}

export default AboutPage