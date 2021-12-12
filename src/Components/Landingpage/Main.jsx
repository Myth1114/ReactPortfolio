import React, { useState } from 'react'
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
            <h3>About</h3>
          </About>
          <Skill to='/skills'>
            <h3>My Skills</h3>
          </Skill>
        </BottomBar>
      </Container>
      {click ? <Introduction click={click} /> : null}
    </MainContainer>
  )
}

export default Main
