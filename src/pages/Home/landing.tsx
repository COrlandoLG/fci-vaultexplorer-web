import React, { useState } from "react";
import Navbar from "../../components/Navbar/index";
import { Zfooter } from "../../components/zfooter/zfooter";
import Search from "../../components/search/search";
import { Nav, LanText, LanTextMin, DivCenter80 } from "../../components/Navbar/Navbar";
import { Card, Row, Col, CardGroup, Offcanvas } from 'react-bootstrap';
import card1 from "../../images/hand-money-cash-hold-coins.svg";
import card2 from "../../images/group-svgrepo-com.svg";
import card3 from "../../images/coin-cryptocurrency-exchange.svg";
import card4 from "../../images/piled-files.svg";
import card5 from "../../images/integration.svg";
import card6 from "../../images/profit-increase-chart.svg";
import bc1 from "../../images/blockchain.webp";
import bc2 from "../../images/CenturionBlockchain.png";
import bc3 from "../../images/blockchain-works.png";
import { SiBlockchaindotcom, SiHiveBlockchain } from 'react-icons/si';
import { CgToolbox } from 'react-icons/cg';
import '../../styles/rerousel.css';

export const Landing: React.FC = () => {

  const items = [
    {id: 1, img:card1, title:"Centurion cNFT", body:"Collateralized Non Fungable Tokens."},
    {id: 2, img:card1, title:"Centurion Wallet", body:"Keep your digital assets safe."},
    {id: 3, img:card1, title:"3rd Paty Services", body:"3rd Party Services are provided by our Partner Businesses."},
    {id: 4, img:card2, title:"Wrapping of Tokens", body:"Manage your Fiat investments using your crypto or Fiat, get paid in Fiat or Crypto."},
    {id: 5, img:card3, title:"Exchange & Assignment", body:"Direct peer-to-peer trading of you NFT investments between Investors."},
    {id: 6, img:card4, title:"Collateralized Loans with assets", body:"Loan Pools for Draw Loans"},
    {id: 7, img:card5, title:"Tokenized Fund Management", body:"Tokenize your real state, loan portfolios or other investments in professional fund management systems integrated to the CENTURION blockchain."},
    {id: 8, img:card6, title:"Smart Investor Distributions", body:"Automatic Investor Distributions via US Dollars or crypto."},
    {id: 9, img:card6, title:"KYC", body:"Know your Customer database and registration, verified against largest financial crime databases."},
    {id: 10, img:card6, title:"Merchant Account", body:"Accept crypto or US Dolar Payments."},
    {id: 11, img:card6, title:"Invest: Available tools like...", body:"DeFi Save & Crypto Staking - Centurion Invest - AutoPilot Grow - Partials & available cashflows from collaterilized Notes or CNFTs"},
    {id: 12, img:card6, title:"Finance Tools", body:"Crypto Loan Origination - Dolar Loans Origination - Collateralized Loans with assets - Crypto Asset management - Fund Mamagement - Trust Accounting - Trust Account Management"},
    {id: 13, img:card1, title:"Payment Services", body:"Payment Services."},
    {id: 14, img:card1, title:"Loan Servicing & Regulation Tech", body:"Loan Servicing & Regulation Technology."},
    {id: 15, img:card1, title:"Invoice Servicing", body:"Invoice Servicing."},
    {id: 16, img:card1, title:"Debts and Receivables", body:"Debts and Receivables."},
    {id: 17, img:card1, title:"Rent Collections", body:"Rent Collections."},
    {id: 18, img:card1, title:"HOA Collections", body:"HOA Collections."},
    {id: 19, img:card1, title:"Client Billing", body:"Client Billing."},
    {id: 20, img:card1, title:"3rd party Invoicing", body:"3rd party Invoicing."},
    {id: 21, img:card1, title:"Real Estate purchases", body:"Real Estate purchases."},
    {id: 22, img:card1, title:"Personal trust accounts", body:"Personal trust accounts."},
    {id: 23, img:card1, title:"Fund Mamagement", body:"Fund Mamagement."},
    {id: 24, img:card1, title:"Private equity funds", body:"Private equity funds."},
    {id: 25, img:card1, title:"Trust Accounting", body:"Trust Accounting."},
    {id: 26, img:card1, title:"Trust Account Management", body:"Trust Account Management."},
    {id: 27, img:card1, title:"Tokenization of business ownership", body:"Tokenization of business ownership."},
    {id: 28, img:card1, title:"Custody Services", body:"Custody Services."},
    {id: 29, img:card1, title:"Spot exchange", body:"Spot exchange between established currencies and cryptocurrencies."},
    {id: 30, img:card1, title:"Smart Contracts", body:"Smart Contract development for any of the Centurion Network of Blockchains."},
  ];

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

      <section id="blockchain" className="section">
        <DivCenter80>
          <LanText>Private Financial Services Blockchain dedicated to track and help decentralize Financial Transactions</LanText>
          
          <LanTextMin>
            The World's first dedicated Financial Blockchain company to integrate Financial Systems, Hedge Funds, Investors, Loan Servicers, Mortgage Brokers, Loan Originators and Fiat Investments with a uniquely designed Blockchain (CENTURION) for the secure, transparent, auditable delivery of Financial Services, tracking every transaction on out integrated financial partners.
          </LanTextMin>
          <img
            className="d-block mx-auto h-50 w-50 mb-5 pb-5"
            src={bc3}
            alt="Centurion Network" />
        </DivCenter80>
      </section>
      
      <section id="vault">
        <div className="section">
          <DivCenter80 className="text-center">
            <LanText>VAULT EXPLORER</LanText>          
            <LanTextMin>Use your Private Centurion Key to search for your portfolios of assets in the blockchain, click through each asset to see their transaction history recorded on the blockain, share your cNFT or download the documents recorded in the IPFS blockchain.</LanTextMin>
            <Search />
          
            <LanTextMin className="d-inline">Integrated to:&nbsp;</LanTextMin>
            <img className="d-inline rerousel" src="https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/02/65/11/026511bd-43f0-930a-0748-179fba32a70f/AppIcon-1x_U007emarketing-0-10-0-85-220.png/256x256bb.jpg" alt="FCI Logo" />
          </DivCenter80>
        </div>
      </section>

      <section id="fintech" className="section">
        <div>
          <LanText>CENTURION - FINTECH SERVICES</LanText>
          <Row className="pt-5" xs={2} md={6}>
            {Array.from(items).map((props, idx) => (              
              <OffCanvasServices key={idx} {...props} />
            ))}
          </Row>
        </div>
      </section>  

      <section id="cNFT" className="section">
        <DivCenter80>
          <LanText>CENTURION cNFT</LanText>
          <LanTextMin>
            <p>The Centurion cNFT is a Collaterilezed NFT, Put simply, collateral is <b>an item of value that a NFT owner can seize from a borrower if he or she fails to repay according to the agreed terms placed on the collateral documents represented by the cNFT</b>. One common example is when you take out a mortgage. Normally, the bank will ask you to provide your home as collateral. All Centurion NFT have collateral, the cNFT keeps your investment secure.</p>
            <p>All cNFT are registered in the Centurion Blockchain, the traceability is transparent and public, and most important all the collateral documents and debts inside the cNFTs are serviced by regulated third party financial institutions.</p>
          </LanTextMin>
          <img
            className="d-block mx-auto h-50 w-50 mb-5 pb-5"
            src={bc1}
            alt="Centurion Network" />
        </DivCenter80>
      </section>    

      <section id="network" className="section">
        <DivCenter80>
          <LanText>CENTURION NETWORK OF BLOCKCHAIN</LanText>
          <LanTextMin>
            How all the Centurion applications and blockchains interconnect to create an advanced and unique financial environment ful of opportunities to our investors.
          </LanTextMin>
          <img
            className="d-block mx-auto h-50 w-50 mb-5 pb-5"
            src={bc2}
            alt="Centurion Network" />
        </DivCenter80>
      </section>

      <Zfooter/>
    </>
  );
};

function OffCanvasServices({ ...props }) {

  const [show, setShow] = useState(0);

  const handleClose = () => setShow(0);
  const handleShow = (id:number) => setShow(id);

  return (
    <>
      <Col key={props.id}>
        <Card style={{border:0, cursor:"pointer"}} onClick={()=>{handleShow(props.id)}}>
          <Card.Img variant="top" src={props.img} style={{width:"4vh"}} className="mx-auto"/>
          <Card.Body>
            <div className="text-center fw-normal">{props.title}</div>
          </Card.Body>
        </Card>
      </Col>
      <Offcanvas show={show===props.id} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {props.body}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}