import React from 'react'
import Page from '../components/Page'

const AboutPage = () => {
    return (
        <Page 
            header={<h1>About Me</h1>} 
            body={
                    <div>
                        <p>I am a developer passionate about technology.</p> 
                        <p>
                            He has been involved in the area for four years, seeking professional development and contributing to the growth of the companies in which I work.
                        </p>
                        <p>Various knowledge accumulated as a result of performance in ERPs, CRMs, Ecommerce and other projects.</p>
                    </div>
            }>        
        </Page>                
    )
}

export default AboutPage