import React from 'react'
import Page from '../components/Page'
import './AboutPage.css'
import { ToolsData } from '../data/ToolsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutPage = () => {
    const description = <div className="about-description">
        <p>I'm a developer passionate about technology based in São Paulo.</p> 
        <p>
            I have been involved in the area about four years, looking for professional development and contributing to the growth of the companies which I work.
        </p>
        <p>My interests are back-end development, full stack development and data engineering.</p>
    </div>
    const tools = <div className="tools">
        <p className="tools-subtitle">Abilities:</p>
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
            header={<h1>About Me</h1>} 
            body={body}>        
        </Page>                
    )
}

export default AboutPage