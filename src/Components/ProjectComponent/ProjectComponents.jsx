import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Box = styled(motion(NavLink))`
  // width: 25rem;
  text-decoration: none;
  height: 15rem;
  // padding: 1rem;
  color: ${(props) => props.theme.text};
  background-color: #161616;
  border-bottom: 2px solid transparent;
  box-shadow: 0 6px 16px rgb(0 0 0 / 20%);
  // margin-bottom: 30px;
  // padding: 38px 42px;
  transition: all 0.15s ease-in-out;

  cursor: pointer;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  z-index: 5;
  overflow: hidden;
  &:hover {
    border-bottom: 2px solid #009e66;
    cursor: pointer;
  }
`

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 80%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  ${Box}:hover & {
    transform: scale(1.1);
    border: 1px solid ${(props) => props.theme.body};
    transition: all 0.5s ease-in-out;
  }
`
const Title = styled.h3`
  color: inherit;
  padding: 0.5rem;
  padding-top: 1rem;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  // border-bottom: 1px solid ${(props) => props.theme.text};
  ${Box}:hover & {
    // border-bottom: 1px solid ${(props) => props.theme.body};
  }
`
// const HashTags = styled.div`
//   padding: 0.5rem;
// `
// const Tag = styled.span`
//   color: #666;
//   padding-right: 0.5rem;
// `

const Container = styled(motion.div)``

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
}

const ProjectComponents = (props) => {
  const { name, imgSrc, link } = props.blog
  return (
    <Container variants={Item}>
      <Box target='_blank' to={{ pathname: link }}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        {/* <HashTags>
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>
          })}
        </HashTags> */}
      </Box>
    </Container>
  )
}

export default ProjectComponents
