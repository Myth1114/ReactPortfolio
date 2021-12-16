import React from 'react'
import { Route, Switch,useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {  lightTheme } from './Components/Theme'
import GlobalStyle from './GlobalStyles'

import Main from './Components/Landingpage/Main'
import AboutPage from './Components/AboutPage/AboutPage'
import BlogPage from './Components/BlogPage/BlogPage'
import MySkillPage from './Components/MySkillPage/MySkillPage'
import WorkPage from './Components/WorkPage/WorkPage'
import { AnimatePresence } from 'framer-motion'


function App() {
 
  const location = useLocation();
  return(
<>
    <GlobalStyle/>
    <ThemeProvider theme={lightTheme}>
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path='/' component={Main}/>
        <Route exact path='/about' component={AboutPage}/>
        <Route exact path='/blog' component={BlogPage}/>
        <Route exact path='/myskill' component={MySkillPage}/>
        <Route exact path='/work' component={WorkPage}/>
      </Switch>
      </AnimatePresence>
     
    </ThemeProvider>
    </>
  )  
}

export default App