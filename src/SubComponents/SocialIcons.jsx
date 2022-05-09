import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
const iconVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 1,
      delay: 1,
    },
  },
}

const Icons = styled(motion.div)`
  display: flex;
  // flex-direction: column;
  align-items: center;
  position: fixed;
  top: 2rem;

  right: 0.5rem;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`
// const Line = styled.span`
//   width: 6rem;
//   height: 2px;
//   background-color: ${(props) => props.theme.text};
// `
const SocialIcons = () => {
  return (
    <Icons variants={iconVariants} initial='initial' animate='final'>
      <div>
        <a
          href='https://github.com/Myth1114'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: '#fff', fontSize: '2rem', marginRight: '.4rem' }}
          to='/'
        >
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a
          href='https://twitter.com/ImMyth14'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: ' #00acee', fontSize: '2rem', marginRight: '.4rem' }}
          to='/'
        >
          <AiFillTwitterCircle />
        </a>
      </div>
      <div>
        <a
          href='https://www.facebook.com/mythlessh.yadav'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: '#3b5998', fontSize: '1.8rem', marginRight: '.4rem' }}
        >
          <BsFacebook />
        </a>
      </div>
      <div>
        <a
          href='https://www.instagram.com/hashtagmyth14/'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: '#833AB4', fontSize: '2rem', marginRight: '.4rem' }}
        >
          <AiOutlineInstagram />
        </a>
      </div>
      {/* <div>
        <NavLink style={{ color: 'inherit' }} to='/'>
          <YouTube height={25} width={25} fill='#ff4336' />
        </NavLink>
      </div> */}
      {/* <Line /> */}
    </Icons>
  )
}

export default SocialIcons
