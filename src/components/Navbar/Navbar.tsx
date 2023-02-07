import styled from "styled-components";
import Certificate from "../../images/Certificate.png";

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
    // display: none;
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
  @media screen and (max-width: 768px) {
    // display: none;
  }
`;

export const DivCenterImage = styled.div`
  width:50%;
  margin:auto;
  background-image:url(${Certificate});
  background-size: 100% 100%;
  padding: 50px 50px 0vh 50px;
`;