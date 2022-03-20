import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Facebook, Github, Instagram, Twitter } from '../Components/AllSvg'

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
          style={{ color: 'inherit', marginRight: '.4rem' }}
          to='/'
        >
          <Github height={25} width={25} fill='red' />
        </a>
      </div>
      <div>
        <a
          href='https://twitter.com/ImMyth14'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'inherit', marginRight: '.4rem' }}
          to='/'
        >
          <Twitter height={25} width={25} fill='lightblue' />
        </a>
      </div>
      <div>
        <a
          href='https://www.facebook.com/mythlessh.yadav'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'inherit', marginRight: '.4rem' }}
        >
          <Facebook height={25} width={25} fill='blue' />
        </a>
      </div>
      <div>
        <a
          href='https://www.facebook.com/mythlessh.yadav'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'inherit', marginRight: '.4rem' }}
        >
          <Instagram height={25} width={25} fill='white' />
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
