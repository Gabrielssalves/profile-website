import './App.css';
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes'
import IntlProviderConfigured from './i18n/IntlProviderConfigured'
import Avatar from './components/Avatar'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import LanguagesControl from './components/LanguageControl'


function App() {
  return (
    <div className="app">
      <Avatar></Avatar>
      <IntlProviderConfigured>
        <Router>
          <LanguagesControl></LanguagesControl>
          <Routes/>
          <NavBar></NavBar>
        </Router>        
        <Intro></Intro>   
      </IntlProviderConfigured>   
    </div>
  );
}

export default App;
