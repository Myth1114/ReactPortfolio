import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from '../Theme'

import PowerButton from '../../SubComponents/PowerButton'
import { motion } from 'framer-motion'

const Box = styled(motion.div)`
  // background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  // width: 100vw;
  // height: 100vh;
  position: relative;
  // display: flex;
  // justify-content: space-evenly;
  // align-items: center;
`

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 0.5rem;

  padding: 10rem 4rem;
  @media (max-width: 600px) {
    padding: 6rem 0.5rem;
  }
`
const SkillBox = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  background-color: #161616;
  border-bottom: 2px solid transparent;
  box-shadow: 0 6px 16px rgb(0 0 0 / 20%);
  // margin-bottom: 30px;
  padding: 38px 42px;
  transition: all 0.15s ease-in-out;
  &:hover {
    border-bottom: 2px solid #009e66;
    cursor: pointer;
  }
  > * {
    margin-bottom: 0.5rem;
  }
`
const Icon = styled.div``
const Img = styled.img`
  width: 5rem;
`
const Title = styled.h2``

const Description = styled.span`
  color: #666;
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
    <ThemeProvider theme={DarkTheme}>
      <Box
        variants={containerVariants}
        initial='hidden'
        animate='show'
        exit='exit'
      >
        <PowerButton />

        <MainContainer>
          <SkillBox>
            <Icon>
              <Img src='/images/html-5.png ' alt='html'></Img>
            </Icon>
            <Title>HTML</Title>
            <Description>Html</Description>
          </SkillBox>
          <SkillBox>
            <Icon>
              <Img src='/images/css-3.png ' alt='css'></Img>
            </Icon>
            <Title>CSS</Title>
            <Description>css</Description>
          </SkillBox>

          <SkillBox>
            <Icon>
              <Img src='/images/sass.png ' alt='scss'></Img>
            </Icon>
            <Title>SCSS</Title>
            <Description>SCSS</Description>
          </SkillBox>
          <SkillBox>
            <Icon>
              <Img src='/images/js-file.png ' alt='js'></Img>
            </Icon>
            <Title>JavaScript</Title>
            <Description>JavaScript</Description>
          </SkillBox>
          <SkillBox>
            <Icon>
              <Img src='/images/react.png ' alt='react'></Img>
            </Icon>
            <Title>React JS</Title>
            <Description>React JS</Description>
          </SkillBox>
          <SkillBox>
            <Icon>A</Icon>
            <Title>Styled Components</Title>
            <Description>Styled Components</Description>
          </SkillBox>
        </MainContainer>
      </Box>
    </ThemeProvider>
  )
}

export default MySkillPage
