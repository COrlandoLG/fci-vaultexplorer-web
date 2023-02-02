import React from "react";
import Navbar from "../../components/Navbar/index";
import { Zfooter } from "../../components/zfooter/zfooter";
import Search from "../../components/search/search";
import { LanText, LanTextMin, DivCenter80 } from "../../components/Navbar/Navbar";
import fci from "../../images/fci-logo.png";
import '../../styles/rerousel.css';

export const Vault: React.FC = () => {

  return (
    <>
        <Navbar />
      
        <section id="vault" className="section">
          <DivCenter80 className="text-center">
              <LanText>VAULT EXPLORER</LanText>          
              <LanTextMin>Use your Private Centurion Key to search for your portfolios of assets in the blockchain, click through each asset to see their transaction history recorded on the blockain, share your cNFT or download the documents recorded in the IPFS blockchain.</LanTextMin>
              <Search />
          
              <LanTextMin className="d-inline">Integrated to:&nbsp;</LanTextMin>
              <img className="d-inline rerousel" src={fci} alt="FCI Logo" />              
          </DivCenter80>
        </section>

        <Zfooter/>
    </>
  );
};