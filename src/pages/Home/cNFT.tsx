import React from "react";
import Navbar from "../../components/Navbar/index";
import { Zfooter } from "../../components/zfooter/zfooter";
import { LanText, LanTextMin, DivCenter80 } from "../../components/Navbar/Navbar";
import gif from "../../images/cNFT.gif";

export const CNFT: React.FC = () => {

  return (
    <>
      <Navbar />

      <section id="cNFT" className="section">
        <DivCenter80>
          <LanText>CENTURION cNFT</LanText>
          <LanTextMin>
            <p>The Centurion cNFT is a Collaterilezed NFT, Put simply, collateral is <b>an item of value that a NFT owner can seize from a borrower if he or she fails to repay according to the agreed terms placed on the collateral documents represented by the cNFT</b>. One common example is when you take out a mortgage. Normally, the bank will ask you to provide your home as collateral. All Centurion NFT have collateral, the cNFT keeps your investment secure.</p>
            <p>All cNFT are registered in the Centurion Blockchain, the traceability is transparent and public, and most important all the collateral documents and debts inside the cNFTs are serviced by regulated third party financial institutions.</p>
          </LanTextMin>
          <img
            className="d-block mx-auto h-50 w-50 mb-5 pb-5"
            src={gif}
            alt="Centurion cNFT" />
        </DivCenter80>
      </section>

      <Zfooter/>
    </>
  );
};