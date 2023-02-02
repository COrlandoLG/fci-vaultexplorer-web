import React from "react";
import Navbar from "../../components/Navbar/index";
import { Zfooter } from "../../components/zfooter/zfooter";
import { LanText, LanTextMin, DivCenter80 } from "../../components/Navbar/Navbar";
import bc2 from "../../images/CenturionBlockchain.png";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export const Network: React.FC = () => {

  return (
    <>    
        <Navbar />

        <section id="network" className="section">
            <DivCenter80>
            <LanText>CENTURION NETWORK OF BLOCKCHAIN</LanText>
            <LanTextMin>
                How all the Centurion applications and blockchains interconnect to create an advanced and unique financial environment ful of opportunities to our investors.
            </LanTextMin>
            <Zoom>
                <img
                className="d-block mx-auto h-50 w-50 mb-5 pb-5"
                src={bc2}
                alt="Centurion Network" />
            </Zoom>
            </DivCenter80>
        </section>

        <Zfooter/>
    </>
  );
};