import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Introduction from '../../Components/Introduction'
import PowerButton from '../../SubComponents/PowerButton'
import {
  MainContainer,
  Container,
  Contact,
  Blog,
  Resume,
  BottomBar,
  About,
  Skill,
  Center,
  DarkDiv,
} from './main.styles'
import LogoComponent from '../../SubComponents/LogoComponent'
import SocialIcons from '../../SubComponents/SocialIcons'

import ParticlesFile from '../Particles/ParticlesFile'
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
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
    },
  },
}
const containerVariants = {
  INITIAL: {
    opacity: 0,
  },
  FINAL: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.8,
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
    },
  },
}

const Main = () => {
  
  const [click, setClick] = useState(false)
  const HandleClick = () => setClick(!click)
  return (
    <MainContainer
      variants={containerVariants}
      initial='INITIAL'
      animate='FINAL'
      exit='exit'
    >
      {/* <div className='patterns'></div> */}
      <ParticlesFile />
      <DarkDiv click={click} />

      <Container>
        <PowerButton />
        <LogoComponent theme={click ? 'light' : 'dark'} />
        <SocialIcons />
        <Center click={click}>
          <img
            onClick={() => HandleClick()}
            src='/Images/react.png'
            width={click ? '120px' : '220px'}
            alt='qwerty'
          ></img>
          <span>Click Here</span>
        </Center>
        <Contact to='/'>
          <h3>hi....</h3>
        </Contact>

        <Blog to='/blog'>
          <h3>Projects</h3>
        </Blog>
        <Resume to='/resume' click={click}>
          <h3>Resume</h3>
        </Resume>
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
            to='/myskill'
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
