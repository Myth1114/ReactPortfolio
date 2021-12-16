import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Introduction from '../../Components/Introduction'
import PowerButton from '../../SubComponents/PowerButton'
import {
  MainContainer,
  Container,
  Contact,
  Blog,
  Work,
  BottomBar,
  About,
  Skill,
  Center,
  DarkDiv,
} from './main.styles'
import LogoComponent from '../../SubComponents/LogoComponent'
import SocialIcons from '../../SubComponents/SocialIcons'

const aboutVarint = {
  initial: {
    opacity: 0,
    x: '-100vw',
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 1,
      duration: 1,
    },
  },
}

const skillVarint = {
  initial: {
    opacity: 0,
    x: '100vw',
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 1,
      duration: 1,
    },
  },
}
const Main = () => {
  const [click, setClick] = useState(false)
  const HandleClick = () => setClick(!click)
  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? 'dark' : 'light'} />
        <SocialIcons />
        <Center click={click}>
          <img
            onClick={() => HandleClick()}
            src='/Images/react.png'
            width={click ? '120px' : '256px'}
            alt='qwerty'
          ></img>
          <span>Click Here</span>
        </Center>
        <Contact to='/'>
          <h3>say hi....</h3>
        </Contact>

        <Blog to='/blog'>
          <h3>Blog</h3>
        </Blog>
        <Work to='/work' click={click}>
          <h3>Work</h3>
        </Work>
        <BottomBar>
          <About to='/about' click={click}>
            <motion.h3 variants={aboutVarint} initial='initial' animate='final'>
              About
            </motion.h3>
          </About>
          <Skill
            variants={skillVarint}
            initial='initial'
            animate='final'
            to='/skills'
          >
            <motion.h3 variants={skillVarint} initial='initial' animate='final'>
              My Skills
            </motion.h3>
          </Skill>
        </BottomBar>
      </Container>
      {click ? <Introduction click={click} /> : null}
    </MainContainer>
  )
}

export default Main
