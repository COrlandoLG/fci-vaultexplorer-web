import React from "react";
import Navbar from "../../components/Navbar/index";
import { Zfooter } from "../../components/zfooter/zfooter";
import { LanText, LanTextMin, DivCenter80 } from "../../components/Navbar/Navbar";
import bc3 from "../../images/blockchain-works.png";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export const Blockchain: React.FC = () => {

  return (
    <>
      <Navbar />

      <section id="blockchain" className="section">
        <DivCenter80>
          <LanText>Private Financial Services Blockchain dedicated to track and help decentralize Financial Transactions</LanText>
          
          <LanTextMin>
            The World's first dedicated Financial Blockchain company to integrate Financial Systems, Hedge Funds, Investors, Loan Servicers, Mortgage Brokers, Loan Originators and Fiat Investments with a uniquely designed Blockchain (CENTURION) for the secure, transparent, auditable delivery of Financial Services, tracking every transaction on out integrated financial partners.
          </LanTextMin>
          <Zoom>
            <img
              className="d-block mx-auto h-50 w-50 mb-5 pb-5"
              src={bc3}
              alt="Centurion Blockchain" />
          </Zoom>
        </DivCenter80>
      </section>

      <Zfooter/>
    </>
  );
};