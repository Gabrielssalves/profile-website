import React from 'react'
import { FormattedMessage } from 'react-intl'
import Page from '../components/Page'

const HomePage = () => {
    return (
        <Page 
            header={<h1><FormattedMessage id="Home"/></h1>} 
            body={<p><FormattedMessage id="HomeBody"/></p>}>
        </Page>                
    )
}

export default HomePage