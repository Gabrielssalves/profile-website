import React from 'react'
import { FormattedMessage } from 'react-intl'
import Page from '../components/Page'

const ProjectsPage = () => {
    return (
        <Page header={<h1><FormattedMessage id="Projects"/></h1>} body={<p><FormattedMessage id="ProjectBody"/></p>}></Page>                
    )
}

export default ProjectsPage