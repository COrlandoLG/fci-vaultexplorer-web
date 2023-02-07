import React from "react";
import Navbar from "../../components/Navbar/index";
import { Zfooter } from "../../components/zfooter/zfooter";
import Search from "../../components/search/search";
import { LanText, LanTextMin } from "../../components/Navbar/Navbar";
import vault from "../../images/Vault.gif";
import { Row, Col, Container } from 'react-bootstrap';


export const Vault: React.FC = () => {

  return (
    <>    
      <Navbar {...({ classToShow: 'navNotHome' })}/>
      
      <section id="vault" className="section">
        <Container>
          <Row>          
            <Col xs={6} className='pt-5'> 
              <LanText>VAULT</LanText>                       
              <LanTextMin>Use your Private Centurion Key to search for your portfolios of assets in the blockchain, click through each asset to see their transaction history recorded on the blockain, share your cNFT or download the documents recorded in the IPFS blockchain.</LanTextMin>
              <Search />
            </Col>
            <Col xs={6}>
              <img id="logo" src={vault} alt="Vault" className="w-100" />
            </Col>            
          </Row>                 
        </Container>
      </section>
      <Zfooter/>
    </>
  );
};