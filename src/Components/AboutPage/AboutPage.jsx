import React, { useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from '../Theme'
import { motion } from 'framer-motion'
// import BigTitle from '../subComponents/BigTitlte'

import PowerButton from '../../SubComponents/PowerButton'
import { containerVariants } from '../FramerMotion/FramerMotion'
import SocialIcons from '../../SubComponents/SocialIcons'
import emailjs from '@emailjs/browser'

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
  padding-bottom: 1rem;
  margin-top: 0.5rem;
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

export const Text = styled.span`
  margin: 0.5rem 0;
`
export const Strong = styled.span`
  font-weight: 800;
  margin-right: 0.5rem;
`
export const Email = styled.span`
  color: #009e66;
`
export const Age = styled.span``

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 3rem 8rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    margin: 0.5rem;
  }
`
export const ContactLeft = styled.div``
export const ContactRight = styled.div``
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  // background: #ebecf0;
`
export const Input = styled.input`
  background: #eee;
  padding: 16px;
  margin: 8px 0;
  // width: 85%;
  border: 0;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 7px 2px 10px #babebc, inset -5px -5px 12px #fff;
`
export const Textarea = styled.textarea`
  background: #eee;
  padding: 16px;
  margin: 8px 0;
  // width: 85%;
  border: 0;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 7px 2px 10px #babebc, inset -5px -5px 12px #fff;
  resize: none;
`

export const Button = styled.button`
  border-radius: 20px;
  border: none;
  outline: none;
  color: #009e66;
  font-size: 12px;
  font-weight: bold;
  padding: 15px 45px;
  margin: 14px 0;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 80ms ease-in;
  width: max-content;
  box-shadow: -5px -5px 10px #009e66, 5px 5px 8px #009e66;
`
const AboutPage = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_tf6d86c',
        'template_rf1iy4o',
        form.current,
        'bppa03VjEfa68OtW2'
      )
      .then(
        (result) => {
          console.log(result.text)
          alert('message send')
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
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
              {/* <Text>
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
              </Text> */}
              <SocialIcons />
            </Bio>
          </Description>
        </About>
        <ContactContainer>
          <ContactLeft>
            <Heading>Message Me</Heading>
            <Form ref={form} onSubmit={sendEmail}>
              <Input
                type='text'
                name='name'
                placeholder='Enter Your Name'
                required
              />
              <Input
                type='email'
                name='email'
                placeholder='Enter Your Email'
                required
              />
              <Textarea
                type='text'
                name='message'
                rows='6'
                placeholder='Your Message'
                required
              />
              <Button type='submit' value='send'>
                Send Message
              </Button>
            </Form>
          </ContactLeft>
          <ContactRight>
            <Heading>Contact Info</Heading>
            <P>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              nostrum aliquam repellat harum doloribus vitae dolore, tempore
              laudantium quisquam officia blanditiis, error molestias adipisci
              vero est excepturi. Iste, ratione rerum.
            </P>
            <Details>
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
            </Details>
          </ContactRight>
        </ContactContainer>
      </Box>
    </ThemeProvider>
  )
}

export default AboutPage
