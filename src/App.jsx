import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Avatar from './components/Avatar'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="app">
      <Avatar></Avatar>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/about" exact component={AboutPage}></Route>
          <Route path="/projects" exact component={ProjectPage}></Route>
          <Route path="/contact" exact component={ContactPage}></Route>
        </Switch>
        <NavBar></NavBar>
      </Router>
      <Intro></Intro>      
    </div>
  );
}

export default App;
