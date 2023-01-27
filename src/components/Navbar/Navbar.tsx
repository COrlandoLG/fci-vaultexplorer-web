import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import headerimage from "../../images/fortcanning.svg";

export const Nav = styled.nav`
  background: url(${headerimage}) no-repeat center center fixed;
  min-height: 100vh;
  width: 100%;
  display: grid-flex;
  background-size: cover;  
`;

export const NavLink = styled(Link)`
  color: #0078D4;
  display: inline;
  margin: 10px 5px;
  text-decoration: ${(props) => {
    return props.style ? (isActive) => (isActive ? "underline" : "none") : "none";
  }};
  padding: 0.2rem 0.8rem;
  height: 100%;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
`;

export const NavMenu = styled.div`
  display: flex;
  position:fixed;
  width: 100%;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavMenu1 = styled.div`
  margin-bottom:20px;
  margin-right:20px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;

  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LanText = styled.div`
  word-wrap: break-word;
  margin:auto;
  display: grid;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  font-weight: bolder;
  color: #0078D4;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
             1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LanTextMin = styled.div`
  word-wrap: break-word;
  margin:auto;
  text-align: justify;
  font-size: 1rem;
  font-weight: bolder;
  margin-top: 5vh;
  margin-bottom: 5vh;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
             1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DivCenter80 = styled.div`
  width:80%;
  margin:auto;
`;