import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {  lightTheme } from './Components/Theme'
import GlobalStyle from './GlobalStyles'

import Main from './Components/Landingpage/Main'
import AboutPage from './Components/AboutPage/AboutPage'
import BlogPage from './Components/BlogPage/BlogPage'
import MySkillPage from './Components/MySkillPage/MySkillPage'
import WorkPage from './Components/WorkPage/WorkPage'

function App() {
  return <div>
    <GlobalStyle/>
    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/about' component={AboutPage}/>
        <Route exact path='/blog' component={BlogPage}/>
        <Route exact path='/myskill' component={MySkillPage}/>
        <Route exact path='/work' component={WorkPage}/>
      </Switch>
    </ThemeProvider>
    
    </div>
}

export default App