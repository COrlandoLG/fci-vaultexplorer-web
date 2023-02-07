import React, { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar/index";
import { Zfooter } from "../../components/zfooter/zfooter";
import { LanText, LanTextMin, DivCenterImage } from "../../components/Navbar/Navbar";
import { Row, Col, Container, Carousel } from 'react-bootstrap';
import { CgToolbox } from 'react-icons/cg';
import gif from "../../images/cNFT.gif";
import bgif from "../../images/background.gif";
import bc2 from "../../images/CenturionBlockchain.png";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { DoRequest } from "../../utils/axios";
import logo from "../../images/logo.png";
import animation from "../../videos/animation.mp4";

import { AiTwotoneAccountBook } from 'react-icons/ai';
import { BsCollection } from 'react-icons/bs';
import { CiVault } from 'react-icons/ci';
import { FaWallet, FaFileContract, FaWpexplorer } from 'react-icons/fa';
import { FcCurrencyExchange, FcAcceptDatabase } from 'react-icons/fc';
import { GiToken, GiTallBridge, GiCustodianHelmet, GiDigitalTrace } from 'react-icons/gi';
import { GrTechnology } from 'react-icons/gr';
import { MdOutlinePayments, MdGeneratingTokens } from 'react-icons/md';
import { RiExchangeFundsFill, RiFundsLine, RiFundsBoxLine } from 'react-icons/ri';
import { SiBlockchaindotcom, SiHomeadvisor, SiHiveBlockchain, SiIpfs } from 'react-icons/si';
import { TbSmartHome, TbBusinessplan } from 'react-icons/tb';
import OffCanvasCustom from '../../components/OffCanvas';

export const Landing: React.FC = () => {

  const items = [
    {id: 1, img:<SiBlockchaindotcom size={22} color={'#0078D4'}/>, extended:<SiBlockchaindotcom size={66} color={'#0078D4'}/>, title:"Centurion cNFT", body:"The Centurion cNFT or Collateralized NFT is a unique digital token that represents ownership of real world financial instruments that contain real estate property in the US as collateral. The Centurion cNFT is a first of a kind NFT, all the cNFTs are verified and financially serviced by compliant financial institutions registered in the US. Our cNFTs currently hold over $30 Billion US Dollars in real estate property and accrue daily gains from interest payments. They can be transferred from one owner to another, while collecting payment in fiat or crypto. All transactions are recorded and transferred to the blockchain directly from the financial institutions, all traceability is registered and is transparent and publicly accessible with the correct credentials."},    
    {id: 2, img:<FaWallet size={22} color={'#0078D4'}/>, extended:<FaWallet size={66} color={'#0078D4'}/>, title:"Centurion Wallet", body:"The Centurion mutichain web3 wallet allows you to Keep, Manage, Exchange and Buy your Fiat and Crypto assets inside one secure platform.  You can store and stake your cNFTs and keep your digital assets safe. The Centurion Wallet application complies with all the standards requested by the top financial institutions, and we are integrated to financial systems managing billions of dollars that allow you to access Fiat investment opportunities with your Crypto, or Crypto investment with your Fiat. It is accessible from your web browser, mobile and desktop."},
    {id: 3, img:<SiHiveBlockchain size={22} color={'#0078D4'}/>, extended:<SiHiveBlockchain size={66} color={'#0078D4'}/>, title:"Private Financial Blockchain", body:"Private Financial Blockchain."},
    {id: 4, img:<GiToken size={22} color={'#0078D4'}/>, extended:<GiToken size={66} color={'#0078D4'}/>, title:"Wrapping of Tokens", body:"Manage your Fiat investments using your crypto or Fiat, get paid in Fiat or Crypto."},
    {id: 5, img:<FcCurrencyExchange size={22} color={'#0078D4'}/>, extended:<FcCurrencyExchange size={66} color={'#0078D4'}/>, title:"cNFT Exchange & Assignment", body:"Direct peer-to-peer trading of you NFT investments between Investors."},
    {id: 6, img:<SiHomeadvisor size={22} color={'#0078D4'}/>, extended:<SiHomeadvisor size={66} color={'#0078D4'}/>, title:"Collateralized Loans System", body:"Loan Pools for Draw Loans"},
    {id: 7, img:<MdGeneratingTokens size={22} color={'#0078D4'}/>, extended:<MdGeneratingTokens size={66} color={'#0078D4'}/>, title:"Tokenized Fund Management", body:"Tokenize your real state, loan portfolios or other investments in professional fund management systems integrated to the CENTURION blockchain."},
    {id: 8, img:<TbSmartHome size={22} color={'#0078D4'}/>, extended:<TbSmartHome size={66} color={'#0078D4'}/>, title:"Smart Investor Distributions", body:"Automatic Investor Distributions via US Dollars or crypto."},
    {id: 9, img:<FcAcceptDatabase size={22} color={'#0078D4'}/>, extended:<FcAcceptDatabase size={66} color={'#0078D4'}/>, title:"KYC", body:"Know your Customer database and registration, verified against largest financial crime databases."},
    {id: 10, img:<GiDigitalTrace size={22} color={'#0078D4'}/>, extended:<GiDigitalTrace size={66} color={'#0078D4'}/>, title:"Loan Traceability Monitor", body:"Loan Traceability Monitor."},
    {id: 11, img:<FaWpexplorer size={22} color={'#0078D4'}/>, extended:<FaWpexplorer size={66} color={'#0078D4'}/>, title:"Blockchain Explorer", body:"Blockchain Explorer."},
    {id: 12, img:<SiIpfs size={22} color={'#0078D4'}/>, extended:<SiIpfs size={66} color={'#0078D4'}/>, title:"IPFS Network", body:"IPFS Network."},
    {id: 13, img:<MdOutlinePayments size={22} color={'#0078D4'}/>, extended:<MdOutlinePayments size={66} color={'#0078D4'}/>, title:"Payment Services", body:"Payment Services."},
    {id: 14, img:<GrTechnology size={22} color={'#0078D4'}/>, extended:<GrTechnology size={66} color={'#0078D4'}/>, title:"Loan Servicing & Regulation", body:"Loan Servicing & Regulation Technology."},
    {id: 15, img:<CiVault size={22} color={'#0078D4'}/>, extended:<CiVault size={66} color={'#0078D4'}/>, title:"Centurion Vault", body:"Centurion Vault."},
    {id: 16, img:<GiTallBridge size={22} color={'#0078D4'}/>, extended:<GiTallBridge size={66} color={'#0078D4'}/>, title:"Fiat to Crypto Bridge ", body:"Fiat to Crypto Bridge."},
    {id: 17, img:<BsCollection size={22} color={'#0078D4'}/>, extended:<BsCollection size={66} color={'#0078D4'}/>, title:"Pay & Collect Account", body:"Pay & Collect Account."},
    {id: 18, img:<AiTwotoneAccountBook size={22} color={'#0078D4'}/>, extended:<AiTwotoneAccountBook size={66} color={'#0078D4'}/>, title:"Personal trust accounts", body:"Personal trust accounts."},
    {id: 19, img:<RiFundsLine size={22} color={'#0078D4'}/>, extended:<RiFundsLine size={66} color={'#0078D4'}/>, title:"Fund Management", body:"Fund Management."},
    {id: 20, img:<RiFundsBoxLine size={22} color={'#0078D4'}/>, extended:<RiFundsBoxLine size={66} color={'#0078D4'}/>, title:"Private equity funds", body:"Private equity funds."},
    {id: 21, img:<AiTwotoneAccountBook size={22} color={'#0078D4'}/>, extended:<AiTwotoneAccountBook size={66} color={'#0078D4'}/>, title:"Trust Accounting Service", body:"Trust Accounting Service."},
    {id: 22, img:<TbBusinessplan size={22} color={'#0078D4'}/>, extended:<TbBusinessplan size={66} color={'#0078D4'}/>, title:"Tokenization of business ownership", body:"Tokenization of business ownership."},
    {id: 23, img:<GiCustodianHelmet size={22} color={'#0078D4'}/>, extended:<GiCustodianHelmet size={66} color={'#0078D4'}/>, title:"Custody Services", body:"Custody Services."},
    {id: 24, img:<RiExchangeFundsFill size={22} color={'#0078D4'}/>, extended:<RiExchangeFundsFill size={66} color={'#0078D4'}/>, title:"Currency Exchange", body:"Currency Exchange."},
    {id: 25, img:<FaFileContract size={22} color={'#0078D4'}/>, extended:<FaFileContract size={66} color={'#0078D4'}/>, title:"Smart Contract Service", body:"Smart Contract development for any of the Centurion Network of Blockchains."},
  ];

  const [navBg, setNavBg] = useState(false);
  const isHome = true;

  const changeNavBg = (e:any) => {
    window.scrollY >= 50 ? setNavBg(true) : setNavBg(false);
  };

  async function getOriginalAmount()
  {
    const post = {
      query: `query { getSumOriginalBalance }`
    };

    const resp= await DoRequest(post);
    return resp.data;
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg, false);
    return () => {
      window.addEventListener("scroll", changeNavBg, false);
    };
  }, []);

  return (
    <>      
      <Navbar {...(isHome && navBg ? { classToShow: 'navNotHome' } : {})}/>

      <section id="landing" className="section text-white" style={{backgroundImage:`url(${bgif})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>

        <Container style={{height:'60vh'}}>
          <Row className='pt-5'>
            <Col className="ps-5 pt-5"><img id="logo" src={logo} alt="Logo" style={{height: '150px'}} /></Col>
            <Col xs={12} className="fw-bold pt-2">
              <div className="animation">
                <div className="first fs-1"><div>Centurion Fintech Blockchain</div></div>
                <div className="second fs-2"><div>Multichain Ecosystem for Financial Institutions</div></div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid className='bg-dark' style={{height:'calc(40vh - 110px)'}}>
          <Row className='ps-5 pe-5' style={{paddingTop:'3vh'}}>
            <Col xs={5} style={{height:'calc(40vh - 110px)'}}>              
              <Row>
                <Col xs={12} className='shi fs-1'>{(212423727).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</Col> 
                <Col xs={12} className='shi'> Of assets collateralized on Centurion Blockchain and serviced by US compliant financial institutions.</Col>
              </Row>
            </Col>
            
            <Col xs={7} style={{fontSize:'2vh'}}>
              <Row>
                <Carousel>
                  <Carousel.Item interval={6000}>
                    <div className="primaryColor fw-bold"><SiBlockchaindotcom /> Private Centurion Blockchain</div>
                    <div className="text-secondary">
                      The Private Centurion Blockchain is a scalable and secure platform created to support transactions for financial institutions. This technology specific to the Financial Industry enhances trust, transparency, and accountability for every transactionDesigned to maximize performance, scalability and privacy.
                    </div>                    
                  </Carousel.Item>
                  <Carousel.Item interval={6000}>
                    <div className="primaryColor fw-bold"><SiHiveBlockchain /> Public Centurion Blockchain</div>
                    <div className="text-muted">
                      Centurion Blockchain is a Public blockchain created to be the bridge between financial institutions and cryptocurrencies. It is designed to be a multichain ecosystem for financial institutions. Apps and services can exchange messages and financial transactions between internal chains and external popular blockchains without the need of a trusted third party.
                    </div>                    
                  </Carousel.Item>
                  <Carousel.Item interval={6000}>                  
                    <div className="primaryColor fw-bold"><CgToolbox /> Centurion IPFS Network</div>
                    <div className="text-secondary">
                      The Centurion IPFS Network has multiple nodes storing financial documents that are cryptographically hashed and resistant against tampering or censorship. When a financial institution uploads a file, your file is split into smaller pieces that are cryptographically hashed and given a unique content identifier, this creates a permanent record of your file as it existed at that point in time.
                    </div>
                  </Carousel.Item>
                </Carousel>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="blockchain" className='pt-2'>
        <video className="w-100" autoPlay loop muted>
          <source src={animation} type="video/mp4" />
        </video>
      </section>

      <section id="fintech" className="section">
          <div>
          <LanText>CENTURION - FINTECH SERVICES</LanText>
          <Container fluid>
            <Row className="pt-5" xs={2} md={5}>
                {Array.from(items).map((props, idx) => (              
                <OffCanvasCustom key={idx} {...props} />
                ))}
            </Row>
          </Container>
          </div>
      </section>

      <section id="cNFT" className="section">
        <DivCenterImage>
          <Container>
            <Row>
              <Col xs={7}>
                <LanTextMin>
                  <p>The Centurion cNFT or Collateralized NFT is a unique digital token that represents ownership of real world financial instruments that contain real estate property in the US as collateral. The Centurion cNFT is a first of a kind NFT, all the cNFTs are verified and financially serviced by compliant financial institutions registered in the US.</p>
                  <p>Our cNFTs currently hold over $30 Billion US Dollars in real estate property and accrue daily gains from interest payments. They can be transferred from one owner to another, while collecting payment in fiat or crypto. All transactions are recorded and transferred to the blockchain directly from the financial institutions, all traceability is registered and is transparent and publicly accessible with the correct credentials.</p>
                </LanTextMin>
              </Col>
              <Col xs={5}>
                <img
                  className="d-block mx-auto h-75 w-100"
                  src={gif}
                  alt="Centurion cNFT" />
              </Col>
            </Row>
          </Container>
        </DivCenterImage>
      </section>

      <section id="network" className="section">
        <Container>
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
        </Container>
      </section>      

      <Zfooter/>
    </>
  );
};