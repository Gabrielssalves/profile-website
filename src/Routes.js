import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'


const LANGUAGES = {
    pt: {
        urlLang: 'pt',
        code: 'pt-BR'
    },
    en: {
        urlLang: 'en',
        code: 'en-US'
    }
}

const MultiLanguageRoute = (props) => {
    const defaultLanguage = LANGUAGES.en.urlLang
    const hasLang = props.computedMatch.params.lang
    const is404Page = props.path
    const isBasePathWithoutLang = props.path === "/"

    if(isBasePathWithoutLang)  return  <Redirect to={`/${defaultLanguage}`} />
    if(!hasLang && !is404Page) return <Redirect to={`/${defaultLanguage}`} />

    return <Route {...props} />    
}

const Routes = () => {
    return (
        <Switch>
          <MultiLanguageRoute path="/" exact/>
          <MultiLanguageRoute path="/:lang" exact component={HomePage}></MultiLanguageRoute>
          <MultiLanguageRoute path="/:lang/about" exact component={AboutPage}></MultiLanguageRoute>
          <MultiLanguageRoute path="/:lang/projects" exact component={ProjectPage}></MultiLanguageRoute>
          <MultiLanguageRoute path="/:lang/contact" exact component={ContactPage}></MultiLanguageRoute>
        </Switch>
    )
}

export default Routes
