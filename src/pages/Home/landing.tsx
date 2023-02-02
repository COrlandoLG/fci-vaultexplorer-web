import React from "react";
import Navbar from "../../components/Navbar/index";
import { Zfooter } from "../../components/zfooter/zfooter";
import { Nav, LanText, LanTextMin, DivCenter80 } from "../../components/Navbar/Navbar";
import { Card, CardGroup } from 'react-bootstrap';
import { CgToolbox } from 'react-icons/cg';import { SiBlockchaindotcom, SiHiveBlockchain } from 'react-icons/si';

export const Landing: React.FC = () => {

  return (
    <>
      <Nav>    
        <Navbar />

        <section id="landing" className="section">
          <DivCenter80>
            <LanText>CENTURION FINTECH</LanText>
            
            <LanTextMin>
              <p>Centurion is thriving at being the goto protocol for launching technologies that work on both Fiat or Crypto, we have created the bridge to go from Bank accounts to Crypto or Crypto payments to your bank account.</p>
              <p>With our vast experience of more than 15 years creating financial solutions for Institutional Investors and funds, we bring to the table technologies that currently manage tens of billions of dolars to all crypto Investors and for all of the investors using our current technologies we bring you access to the Crypto opportunities.</p> 
            </LanTextMin>          
          
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title className="primaryColor"><SiBlockchaindotcom /> Centurion Blockchain</Card.Title>
                  <div className="fs-6 lh-base">
                    <Card.Text>
                      Our dedicated Financial blockchain that containd the bridge between the Fiat and Crypto financial protocols, implementing and scaling with cross-chain technology and integration different financial institutions to our fintech services.
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title className="primaryColor"><SiHiveBlockchain /> HyperLedger Fabric Blockchain</Card.Title>
                  <div className="fs-6 lh-base">
                    <Card.Text>
                      Record your financial transactions on the blockchain, work with our team to deploy your infraestructure onto the blockchain.
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title className="primaryColor"><CgToolbox /> Centurion IPFS Blockchain</Card.Title>
                  <div className="fs-6 lh-base">
                    <Card.Text>
                      Share your files on the Centurion IPFS blockchain securely, this tool keeps track of all the changes, version control of your document to streamline the zero-knowledge proof.
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>              
            </CardGroup>
          </DivCenter80>
        </section>
      </Nav>

      <Zfooter/>
    </>
  );
};