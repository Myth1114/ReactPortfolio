import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const Rotate = keyframes`
from{
  transform:rotate(0)
}
to{
  transform:rotate(360deg)
}
`;
export const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 700;
  }
`;
export const Container = styled.div`
  padding: 2rem;
`;
export const Contact = styled(NavLink)`
  position: absolute;
  top: 2rem;
  right: 1rem;
  z-index: 1;
  color: ${(props) => props.theme.text};
`;
export const Blog = styled(NavLink)`
  position: absolute;
  color: ${(props) => props.theme.text};
  right: 1rem;
  top: 50%;
  z-index: 1;
  transform: rotate(90deg);
`;
export const Resume = styled(NavLink)`
  position: absolute;
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  top: 50%;
  left: 2%;
  z-index: 1;
  transform: rotate(-90deg);
`;

export const BottomBar = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
export const Skill = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;
export const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "90%" : "50%")};
  transform: translate(-50%, -59%);
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 1s ease;
  & > :first-child {
    animation: ${Rotate} infinite 3.5s linear;
  }
  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
  }
`;
export const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #ff4336;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;
