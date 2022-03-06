import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from '../Theme'
import { motion } from 'framer-motion'
// import BigTitle from '../subComponents/BigTitlte'

import PowerButton from '../../SubComponents/PowerButton'
import { containerVariants } from '../FramerMotion/FramerMotion'
import SocialIcons from '../../SubComponents/SocialIcons'

const Box = styled(motion.div)`
  // background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  // width: 100vw;
  // height: 100vh;
  position: relative;
  overflow: hidden;
  // padding-bottom: 5rem;
`
// const float = keyframes`
// 0% { transform: translateY(-10px) }
// 50% { transform: translateY(15px) translateX(15px) }
// 100% { transform: translateY(-10px) }
// `
// const Spaceman = styled.div`
//   position: absolute;
//   top: 10%;
//   right: 5%;
//   width: 20vw;
//   animation: ${float} 4s ease infinite;
//   img {
//     width: 100%;
//     height: auto;
//   }
// `
// const Main = styled.div`
//   border: 2px solid ${(props) => props.theme.text};
//   color: ${(props) => props.theme.text};
//   padding: 2rem;
//   width: 50vw;
//   height: 60vh;
//   z-index: 3;
//   line-height: 1.5;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: calc(0.6rem + 1vw);
//   backdrop-filter: blur(4px);

//   position: absolute;
//   left: calc(5rem + 5vw);
//   top: 10rem;
//   font-family: 'Ubuntu Mono', monospace;
//   font-style: italic;
// `

export const About = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 5rem 10rem 5rem 10rem;
  justify-items: center;
  align-items: center;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    margin: 5rem 0.5rem 5rem 0.5rem;
  }
`
export const Image = styled.div``
export const Img = styled.img``
export const Description = styled.div`
  > * {
    margin-bottom: 0.5rem;
  }
`
export const P = styled.p`
  color: #666;
  border-bottom: 2px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 3rem;
`
export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 6rem;
`

export const Span = styled.span`
  color: #666;
`
export const Heading = styled.h2`
  font-weight: 900;
  font-size: 2rem;
  margin-top: 0.9rem;
`
export const Title = styled.h2`
  color: #009e66;
`
export const Name = styled.h2`
  font-weight: 900;
`
export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 0.5rem;
  }
`

export const Text = styled.span``
export const Strong = styled.span`
  margin-right: 0.5rem;
`
export const Email = styled.span`
  color: #009e66;
`
export const Age = styled.span``

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        variants={containerVariants}
        initial='hidden'
        animate='show'
        exit='exit'
      >
        {/* <SocialIcons theme='dark' /> */}
        <PowerButton />
        <Top>
          <Span>Get to know me</Span>
          <Heading>About Me</Heading>
        </Top>
        <About>
          <Image>
            <Img src='/Images/react.png' alt='ll'></Img>
          </Image>
          <Description>
            <Title>Who am i?</Title>
            <Name>I'm MITHILESH YADAV UI designer and web developer</Name>
            <P>
              I'm a front-end developer from Nepal. I love to create simple and
              beautiful websites with great enthusiasm.
              <br /> <br />
              I'm interested in the whole frontend developement as well as
              designing and creating stylish websites and trying to implement
              trending designs and building great projects. I love playing
              cricket and reading books.
              <br /> <br />I believe patience is the key to be a good web
              developer. You can connect with me via social links.
            </P>
            <Bio>
              <Text>
                <Strong>Name:</Strong>
                <Email>Mithilesh Yadav</Email>
              </Text>
              <Text>
                <Strong>Email:</Strong>
                <Email>mythleshyadav114@gmail.com</Email>
              </Text>
              <Text>
                <Strong>Age:</Strong>
                <Email>24</Email>
              </Text>
              <Text>
                <Strong>Location:</Strong>
                <Email>Nepal</Email>
              </Text>
              <SocialIcons />
            </Bio>
          </Description>
        </About>
       
        {/* <Spaceman>
          <img src={astronaut} alt='spaceman' />
        </Spaceman>
        <Main>
          I'm a front-end developer located in India. I love to create simple
          yet beautiful websites with great user experience.
          <br /> <br />
          I'm interested in the whole frontend stack Like trying new things and
          building great projects. I'm an independent freelancer and blogger. I
          love to write blogs and read books.
          <br /> <br />I believe everything is an Art when you put your
          consciousness in it. You can connect with me via social links.
        </Main> */}

        {/* <BigTitle text='ABOUT' top='10%' left='5%' /> */}
      </Box>
    </ThemeProvider>
  )
}

export default AboutPage
