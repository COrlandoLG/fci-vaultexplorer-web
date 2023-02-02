import React, { useState } from "react";
import Navbar from "../../components/Navbar/index";
import { Zfooter } from "../../components/zfooter/zfooter";
import { LanText } from "../../components/Navbar/Navbar";
import { Card, Row, Col, Offcanvas } from 'react-bootstrap';
import { AiTwotoneAccountBook } from 'react-icons/ai';
import { BsCollection } from 'react-icons/bs';
import { FaWallet, FaFileInvoiceDollar, FaFileContract, FaMoneyBillAlt } from 'react-icons/fa';
import { FcCurrencyExchange, FcAcceptDatabase, FcDebt } from 'react-icons/fc';
import { GiToken, GiPayMoney, GiCustodianHelmet } from 'react-icons/gi';
import { GrServices, GrTechnology } from 'react-icons/gr';
import { MdDesignServices, MdOutlinePayments, MdOutlineBedroomParent, MdRealEstateAgent, MdAccountBalance, MdGeneratingTokens } from 'react-icons/md';
import { RiExchangeFundsFill, RiFundsLine, RiFundsBoxLine } from 'react-icons/ri';
import { SiBlockchaindotcom, SiHomeadvisor } from 'react-icons/si';
import { TbSmartHome, TbTools, TbBusinessplan } from 'react-icons/tb';

export const Fintech: React.FC = () => {

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
    {id: 19, img:<FaMoneyBillAlt size={22} color={'#0078D4'}/>, extended:<FaMoneyBillAlt size={66} color={'#0078D4'}/>, title:"Client Billing", body:"Client Billing."},
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
        <Navbar />

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