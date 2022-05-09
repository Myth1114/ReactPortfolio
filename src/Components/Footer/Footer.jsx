import React from 'react'
// import { Section } from '../../GlobalStyles/globalstyles'

import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { MdSettingsAccessibility } from 'react-icons/md'
import { BiBookOpen } from 'react-icons/bi'
import { AiOutlineProject } from 'react-icons/ai'

import { NavBar, Icon, Section } from './Footer.styles'

const Footer = () => {
  return (
    <Section>
      <NavBar>
        <Icon to='/'>
          <AiOutlineHome />
        </Icon>
        <Icon to='/about'>
          <AiOutlineUser />
        </Icon>
        <Icon to='/myskill'>
          <MdSettingsAccessibility />
        </Icon>
        <Icon to='/resume'>
          <BiBookOpen />
        </Icon>
        <Icon to='/project'>
          <AiOutlineProject />
        </Icon>
      </NavBar>
    </Section>
  )
}

export default Footer
