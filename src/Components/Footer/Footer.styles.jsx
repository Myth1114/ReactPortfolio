import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Section = styled.section``
export const NavBar = styled.nav`
  background: #009e66;
  width: max-content;
  z-index: 2;
  left: 50%;
  position: fixed;
  transform: translateX(-50%);
  bottom: 0.5rem;
  display: flex;
  gap: 1rem;
  border-radius: 3rem;
  padding: 0.5rem 0.8rem;
  backdrop-filter: blur(15px);
`
export const Icon = styled(Link)`
  background: transparent;
  padding: 0.9rem;
  border-radius: 50%;
  display: flex;
  color: #fff;
  font-size: 1.1rem;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`
