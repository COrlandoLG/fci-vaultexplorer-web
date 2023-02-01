import React, { useState } from "react";
import Navbar from "../../components/Navbar/index";
import { Zfooter } from "../../components/zfooter/zfooter";
import Search from "../../components/search/search";
import { Nav, LanText, LanTextMin, DivCenter80 } from "../../components/Navbar/Navbar";
import { Card, Row, Col, CardGroup, Offcanvas } from 'react-bootstrap';
import bc1 from "../../images/blockchain.webp";
import bc2 from "../../images/CenturionBlockchain.png";
import bc3 from "../../images/blockchain-works.png";
import gif from "../../images/cNFT.gif";
import { AiTwotoneAccountBook } from 'react-icons/ai';
import { BsCollection } from 'react-icons/bs';
import { CgToolbox } from 'react-icons/cg';
import { CiMoneyBill } from 'react-icons/ci';
import { FaWallet, FaFileInvoiceDollar, FaFileContract } from 'react-icons/fa';
import { FcCurrencyExchange, FcAcceptDatabase, FcDebt } from 'react-icons/fc';
import { GiToken, GiPayMoney, GiCustodianHelmet } from 'react-icons/gi';
import { GrServices, GrTechnology } from 'react-icons/gr';
import { MdDesignServices, MdOutlinePayments, MdOutlineBedroomParent, MdRealEstateAgent, MdAccountBalance, MdGeneratingTokens } from 'react-icons/md';
import { RiExchangeFundsFill, RiFundsLine, RiFundsBoxLine } from 'react-icons/ri';
import { SiBlockchaindotcom, SiHiveBlockchain, SiHomeadvisor } from 'react-icons/si';
import { TbSmartHome, TbTools, TbBusinessplan } from 'react-icons/tb';
import '../../styles/rerousel.css';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export const Landing: React.FC = () => {

  const items = [
    {id: 1, img:<SiBlockchaindotcom size={22} color={'#0078D4'}/>, extended:<SiBlockchaindotcom size={66} color={'#0078D4'}/>, title:"Centurion cNFT", body:"Collateralized Non Fungable Tokens."},
    {id: 2, img:<FaWallet size={22} color={'#0078D4'}/>, extended:<FaWallet size={66} color={'#0078D4'}/>, title:"Centurion Wallet", body:"Keep your digital assets safe."},
    {id: 3, img:<GrServices size={22} color={'#0078D4'}/>, extended:<GrServices size={66} color={'#0078D4'}/>, title:"3rd Party Services", body:"3rd Party Services are provided by our Partner Businesses."},
    {id: 4, img:<GiToken size={22} color={'#0078D4'}/>, extended:<GiToken size={66} color={'#0078D4'}/>, title:"Wrapping of Tokens", body:"Manage your Fiat investments using your crypto or Fiat, get paid in Fiat or Crypto."},
    {id: 5, img:<FcCurrencyExchange size={22} color={'#0078D4'}/>, extended:<FcCurrencyExchange size={66} color={'#0078D4'}/>, title:"Exchange & Assignment", body:"Direct peer-to-peer trading of you NFT investments between Investors."},
    {id: 6, img:<SiHomeadvisor size={22} color={'#0078D4'}/>, extended:<SiHomeadvisor size={66} color={'#0078D4'}/>, title:"Collateralized Loans with assets", body:"Loan Pools for Draw Loans"},
    {id: 7, img:<MdGeneratingTokens size={22} color={'#0078D4'}/>, extended:<MdGeneratingTokens size={66} color={'#0078D4'}/>, title:"Tokenized Fund Management", body:"Tokenize your real state, loan portfolios or other investments in professional fund management systems integrated to the CENTURION blockchain."},
    {id: 8, img:<TbSmartHome size={22} color={'#0078D4'}/>, extended:<TbSmartHome size={66} color={'#0078D4'}/>, title:"Smart Investor Distributions", body:"Automatic Investor Distributions via US Dollars or crypto."},
    {id: 9, img:<FcAcceptDatabase size={22} color={'#0078D4'}/>, extended:<FcAcceptDatabase size={66} color={'#0078D4'}/>, title:"KYC", body:"Know your Customer database and registration, verified against largest financial crime databases."},
    {id: 10, img:<GiPayMoney size={22} color={'#0078D4'}/>, extended:<GiPayMoney size={66} color={'#0078D4'}/>, title:"Merchant Account", body:"Accept crypto or US Dolar Payments."},
    {id: 11, img:<MdDesignServices size={22} color={'#0078D4'}/>, extended:<MdDesignServices size={66} color={'#0078D4'}/>, title:"Invest: Available tools like...", body:"DeFi Save & Crypto Staking - Centurion Invest - AutoPilot Grow - Partials & available cashflows from collaterilized Notes or CNFTs"},
    {id: 12, img:<TbTools size={22} color={'#0078D4'}/>, extended:<TbTools size={66} color={'#0078D4'}/>, title:"Finance Tools", body:"Crypto Loan Origination - Dolar Loans Origination - Collateralized Loans with assets - Crypto Asset management - Fund Mamagement - Trust Accounting - Trust Account Management"},
    {id: 13, img:<MdOutlinePayments size={22} color={'#0078D4'}/>, extended:<MdOutlinePayments size={66} color={'#0078D4'}/>, title:"Payment Services", body:"Payment Services."},
    {id: 14, img:<GrTechnology size={22} color={'#0078D4'}/>, extended:<GrTechnology size={66} color={'#0078D4'}/>, title:"Loan Servicing & Regulation Tech", body:"Loan Servicing & Regulation Technology."},
    {id: 15, img:<FaFileInvoiceDollar size={22} color={'#0078D4'}/>, extended:<FaFileInvoiceDollar size={66} color={'#0078D4'}/>, title:"Invoice Servicing", body:"Invoice Servicing."},
    {id: 16, img:<FcDebt size={22} color={'#0078D4'}/>, extended:<FcDebt size={66} color={'#0078D4'}/>, title:"Debts and Receivables", body:"Debts and Receivables."},
    {id: 17, img:<MdOutlineBedroomParent size={22} color={'#0078D4'}/>, extended:<MdOutlineBedroomParent size={66} color={'#0078D4'}/>, title:"Rent Collections", body:"Rent Collections."},
    {id: 18, img:<BsCollection size={22} color={'#0078D4'}/>, extended:<BsCollection size={66} color={'#0078D4'}/>, title:"HOA Collections", body:"HOA Collections."},
    {id: 19, img:<CiMoneyBill size={22} color={'#0078D4'}/>, extended:<CiMoneyBill size={66} color={'#0078D4'}/>, title:"Client Billing", body:"Client Billing."},
    {id: 20, img:<GrServices size={22} color={'#0078D4'}/>, extended:<GrServices size={66} color={'#0078D4'}/>, title:"3rd party Invoicing", body:"3rd party Invoicing."},
    {id: 21, img:<MdRealEstateAgent size={22} color={'#0078D4'}/>, extended:<MdRealEstateAgent size={66} color={'#0078D4'}/>, title:"Real Estate purchases", body:"Real Estate purchases."},
    {id: 22, img:<AiTwotoneAccountBook size={22} color={'#0078D4'}/>, extended:<AiTwotoneAccountBook size={66} color={'#0078D4'}/>, title:"Personal trust accounts", body:"Personal trust accounts."},
    {id: 23, img:<RiFundsLine size={22} color={'#0078D4'}/>, extended:<RiFundsLine size={66} color={'#0078D4'}/>, title:"Fund Mamagement", body:"Fund Mamagement."},
    {id: 24, img:<RiFundsBoxLine size={22} color={'#0078D4'}/>, extended:<RiFundsBoxLine size={66} color={'#0078D4'}/>, title:"Private equity funds", body:"Private equity funds."},
    {id: 25, img:<AiTwotoneAccountBook size={22} color={'#0078D4'}/>, extended:<AiTwotoneAccountBook size={66} color={'#0078D4'}/>, title:"Trust Accounting", body:"Trust Accounting."},
    {id: 26, img:<MdAccountBalance size={22} color={'#0078D4'}/>, extended:<MdAccountBalance size={66} color={'#0078D4'}/>, title:"Trust Account Management", body:"Trust Account Management."},
    {id: 27, img:<TbBusinessplan size={22} color={'#0078D4'}/>, extended:<TbBusinessplan size={66} color={'#0078D4'}/>, title:"Tokenization of business ownership", body:"Tokenization of business ownership."},
    {id: 28, img:<GiCustodianHelmet size={22} color={'#0078D4'}/>, extended:<GiCustodianHelmet size={66} color={'#0078D4'}/>, title:"Custody Services", body:"Custody Services."},
    {id: 29, img:<RiExchangeFundsFill size={22} color={'#0078D4'}/>, extended:<RiExchangeFundsFill size={66} color={'#0078D4'}/>, title:"Spot exchange", body:"Spot exchange between established currencies and cryptocurrencies."},
    {id: 30, img:<FaFileContract size={22} color={'#0078D4'}/>, extended:<FaFileContract size={66} color={'#0078D4'}/>, title:"Smart Contracts", body:"Smart Contract development for any of the Centurion Network of Blockchains."},
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
          <Zoom>
            <img
              className="d-block mx-auto h-50 w-50 mb-5 pb-5"
              src={bc3}
              alt="Centurion Network" />
          </Zoom>
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
            <img className="d-inline rerousel" src={gif} alt="cNFT Logo" />
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

function OffCanvasServices({ ...props }) {

  const [show, setShow] = useState(0);

  const handleClose = () => setShow(0);
  const handleShow = (id:number) => setShow(id);

  return (
    <>
      <Col key={props.id}>
        <Card style={{border:0, cursor:"pointer"}} onClick={()=>{handleShow(props.id)}}>
          <div className="mx-auto">{props.img}</div>
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
          <div className="text-center p-5">{props.extended}</div>
          {props.body}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}