import React from 'react'
import { Blogs } from '../../Data/BlogData'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import img from '../../assets/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import ProjectComponents from '../ProjectComponent/ProjectComponents'
import PowerButton from '../../SubComponents/PowerButton'
import SocialIcons from '../../SubComponents/SocialIcons'
import LogoComponent from '../../SubComponents/LogoComponent'

const MainContainer = styled(motion.div)`
  // background-image: url(${img});
  // background-size: cover;
  // background-repeat: no-repeat;
  // background-attachment: fixed;
  // background-position: center;
`
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`

const Center = styled.div`
  padding-top: 10rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
  margin: 0 1rem;
`
const containerVariants = {
  hidden: { x: '100vw' },
  show: {
    x: 0,
    transition: {
      type: 'spring',
      staggerChildren: 0.5,
      duration: 0.5,
      delay: 0.7,
      stiffness: 100,
    },
  },
  exit: {
    x: '100vw',
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
}
const ProjectPage = () => {
  return (
    <MainContainer
      variants={containerVariants}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        {/* <AnchorComponent number={numbers} /> */}
        <Center>
          <Grid>
            {Blogs.map((blog) => {
              return <ProjectComponents key={blog.id} blog={blog} />
            })}
          </Grid>
        </Center>
        {/* <BigTitle text='BLOG' top='5rem' left='5rem' /> */}
      </Container>
    </MainContainer>
  )
}

export default ProjectPage
