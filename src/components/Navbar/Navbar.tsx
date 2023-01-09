import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import headerimage from "../../images/fortcanning.svg";


export const Nav = styled.nav`
  background: url(${headerimage}) no-repeat center center fixed;
  min-height: 100vh;
  width: 100%;
  display: grid-flex;
  background-size: cover;
  font-family: Arial, Helvetica, sans-serif;
`;

export const HL2 = styled(Link)`
  margin-left: 20px;
  font-size: 1.5rem;
  color: #900;
  display: inline;
  margin-top: 12px;
  margin-bottom: 20px;
  align-items: top;
  text-decoration: ${(props) => {
    return props.style ? (isActive) => (isActive ? "underline" : "none") : "none";
  }};
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  color: #fffff;
  font-weight: bold;
  &:hover {
    color: #000;
    font-weight: bold;
  }
`;

export const NavLink = styled(Link)`
  color: #900;
  display: inline;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: top;
  text-decoration: ${(props) => {
    return props.style ? (isActive) => (isActive ? "underline" : "none") : "none";
  }};
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  color: #fffff;
  font-weight: bold;
  &:hover {
    color: #000;
    font-weight: bold;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;

    top: 0;
    left: 0;
    transform: translate(100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #fff;
  margin: auto;
  width: 100%;
  white-space: nowrap; */
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
  font-family: Arial, Helvetica, sans-serif;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;

  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Zomato = styled.div`
  display: grid;
  align-items: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 90px;
  font-weight: bolder;
  color: #900;
  white-space: nowrap;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
             1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
  */ @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LanText = styled.div`
  word-wrap: break-word;
  width:70%;
  margin:auto;
  display: grid;
  align-items: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2.5rem;
  font-weight: bolder;
  color: #900;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
             1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
  */ @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LanTextMin = styled.div`
  word-wrap: break-word;
  width:70%;
  margin:auto;
  text-align: justify;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  font-weight: bolder;
  margin-bottom: 10vh;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
             1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
  */ @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DivCenter = styled.div`
  width:70%;
  margin:auto;
`;

export const DivCenter80 = styled.div`
  width:80%;
  margin:auto;
`;