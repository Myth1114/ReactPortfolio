import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Facebook, Github, Twitter } from '../Components/AllSvg'

const iconVariants = {
  initial: {
    height: 0,
  },
  final: {
    height: '40vh',
    transition: {
      type: 'spring',
      duration: 1,
      delay: 1,
    },
  },
}

const Icons = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;

  left: 3%;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`
const Line = styled.span`
  width: 2px;
  height: 6rem;
  background-color: ${(props) => props.theme.text};
`
const SocialIcons = () => {
  return (
    <Icons variants={iconVariants} initial='initial' animate='final'>
      <div>
        <NavLink style={{ color: 'inherit' }} to='/'>
          <Github height={25} width={25} fill='red' />
        </NavLink>
      </div>
      <div>
        <NavLink style={{ color: 'inherit' }} to='/'>
          <Twitter height={25} width={25} fill='lightblue' />
        </NavLink>
      </div>
      <div>
        <NavLink style={{ color: 'inherit' }} to='/'>
          <Facebook height={25} width={25} fill='blue' />
        </NavLink>
      </div>
      {/* <div>
        <NavLink style={{ color: 'inherit' }} to='/'>
          <YouTube height={25} width={25} fill='#ff4336' />
        </NavLink>
      </div> */}
      <Line />
    </Icons>
  )
}

export default SocialIcons
