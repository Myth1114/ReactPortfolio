import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from '../Theme'
import { Design, Develope } from '../AllSvg'
import LogoComponent from '../../SubComponents/LogoComponent'
import SocialIcons from '../../SubComponents/SocialIcons'
import PowerButton from '../../SubComponents/PowerButton'
import { motion } from 'framer-motion'
// import ParticleComponent from '../subComponents/ParticleComponent'
// import BigTitle from '../subComponents/BigTitlte'

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`
const containerVariants = {
  hidden: { opacity: 0, y: '-100vh' },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      staggerChildren: 0.5,
      duration: 0.5,
      stiffness: 100,
    },
  },
  exit: {
    y: '100vh',
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
}

// const mainVariants = {
//   hidden: {
//     scale: 0,
//   },
//   show: {
//     scale: 1,
//     transition: {
//       type: 'spring',
//       duration: 1.5,
//     },
//   },
// }
const MySkillPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        variants={containerVariants}
        initial='hidden'
        animate='show'
        exit='exit'
      >
        <LogoComponent theme='light' />
        <SocialIcons theme='light' />
        <PowerButton />
        {/* <ParticleComponent theme='light' /> */}
        <Main>
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Figma</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Frontend Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase
              etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Codepen etc.</p>
          </Description>
        </Main>

        {/* <BigTitle text='SKILLS' top='80%' right='30%' /> */}
      </Box>
    </ThemeProvider>
  )
}

export default MySkillPage
