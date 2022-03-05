import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from '../Theme'
import { containerVariants } from '../FramerMotion/FramerMotion'
import { motion } from 'framer-motion'
import PowerButton from '../../SubComponents/PowerButton'
const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  // width: 100vw;
  // height: 100vh;
  position: relative;
  overflow: hidden;
`

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
const Container1 = styled.div`
  padding: 5rem 4rem;
  @media (max-width: 600px) {
    padding: 2rem 1rem;
  }
`

const Container2 = styled.div`
  padding: 5rem 4rem;
  @media (max-width: 600px) {
    padding: 2rem 1rem;
  }
`
const Heading = styled.h2`
  display: flex;
  justify-content: center;
  margin: 1rem;
  @media (max-width: 600px) {
    margin-top: 3rem;
  }
`
const LeftBox = styled.div`
  // margin: 1rem;
`
const ResumeItem = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #161616;
  border-left: 2px solid transparent;
  padding: 2rem 4.3rem;
  position: relative;
  border-left-color: #009e66;
  border-bottom: 1px solid #313131;

  & :not(:first-child) {
    margin-bottom: 0.5rem;
  }
`
const Title = styled.div``
const Details = styled.div``
const H3 = styled.h4`
  margin-bottom: 0.5rem;
`
const P = styled.p`
  color: #666;
`
const LeftArrow = styled.div`
  &:before {
    content: '';
    display: block;
    position: absolute;
    background-color: #009e66;
    height: 16px;
    left: 0;
    width: 16px;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;

    border: 8px solid transparent;
    left: 16px;

    border-left-color: #009e66;
  }
`

const ResumePage = () => {
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
          <Container1>
            <Heading>Education</Heading>
            <LeftBox>
              <ResumeItem>
                <LeftArrow></LeftArrow>
                <Title>Computer Science</Title>
                <Details>
                  <H3>Dr.Ambedkar Institute of Technology 2016-2020</H3>
                  <P>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio quo repudiandae.
                  </P>
                </Details>
              </ResumeItem>
              <ResumeItem>
                <LeftArrow></LeftArrow>
                <Title>Bachelor Degree</Title>
                <Details>
                  <H3>Dr.Ambedkar Institute of Technology 2016-2020</H3>
                  <P>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio quo repudiandae.
                  </P>
                </Details>
              </ResumeItem>
              <ResumeItem>
                <LeftArrow></LeftArrow>
                <Title>Computer Science</Title>
                <Details>
                  <H3>Dr.Ambedkar Institute of Technology 2016-2020</H3>
                  <P>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio quo repudiandae.
                  </P>
                </Details>
              </ResumeItem>
            </LeftBox>
          </Container1>
          <Container2>
            <Heading>Education</Heading>
            <LeftBox>
              <ResumeItem>
                <LeftArrow></LeftArrow>
                <Title>Computer Science</Title>
                <Details>
                  <H3>Dr.Ambedkar Institute of Technology 2016-2020</H3>
                  <P>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio quo repudiandae.
                  </P>
                </Details>
              </ResumeItem>
              <ResumeItem>
                <LeftArrow></LeftArrow>
                <Title>Computer Science</Title>
                <Details>
                  <H3>Dr.Ambedkar Institute of Technology 2016-2020</H3>
                  <P>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio quo repudiandae.
                  </P>
                </Details>
              </ResumeItem>
              <ResumeItem>
                <LeftArrow></LeftArrow>
                <Title>Computer Science</Title>
                <Details>
                  <H3>Dr.Ambedkar Institute of Technology 2016-2020</H3>
                  <P>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio quo repudiandae.
                  </P>
                </Details>
              </ResumeItem>
            </LeftBox>
          </Container2>
        </MainContainer>
      </Box>
    </ThemeProvider>
  )
}

export default ResumePage
