import React from "react";
import Search from "../search/search";
import { Nav, NavLink, Bars, NavMenu, Zomato, HL2, LanText, LanTextMin, DivCenter, DivCenter80 } from "./Navbar";
import Slide from "./rerousel";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import card1 from "../../images/hand-money-cash-hold-coins.svg";
import card2 from "../../images/group-svgrepo-com.svg";
import card3 from "../../images/coin-cryptocurrency-exchange.svg";
import card4 from "../../images/piled-files.svg";
import card5 from "../../images/integration.svg";
import card6 from "../../images/profit-increase-chart.svg";

export const Navbar: React.FC = (onLoansChange) => {

  const items = [
    {img:card1, title:"Loan Servicing", body:"Track your loan transactions."},
    {img:card2, title:"Wrapping of Tokens", body:"Manage your Fiat investments using your crypto or Fiat, get paid in Fiat or Crypto."},
    {img:card3, title:"Exchange & Assignment", body:"Direct peer-to-peer trading of yourNFT investments between Investors."},
    {img:card4, title:"Collateralized Debt Pool", body:"Loan Pools for Draw Loans"},
    {img:card5, title:"Tokenized Fund Management", body:"Tokenize your real state, loan portfolios or other investments in professional fund management systems integrated to the CENTURION blockchain."},
    {img:card6, title:"Smart Investor Distributions", body:"Automatic Investor Distributions via US Dollars or crypto."}
  ];

  const handleClick = (event: any) => {
    const element = document.getElementById('vault');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <section id="landing">
        <Nav>
          <Bars>Get the App Log in Sign up</Bars>
          <NavMenu>
            <HL2 to="/">
              CENTURION BLOCKCHAIN
            </HL2>
            
            {/* <NavMenu1> */}
              <NavLink to="/">
                Developers
              </NavLink>
              <NavLink to="/">
                Ecosystem
              </NavLink>
              <NavLink to="/" onClick={handleClick}>
                Vault Explorer
              </NavLink>
              <NavLink to="/">
                Centurion NFT
              </NavLink>
            {/* </NavMenu1> */}
          </NavMenu> 

          <LanText>A Private Financial Services Blockchain Dedicated to track and help decentralize Financial Transactions</LanText>
          
          <LanTextMin>
            The World's first dedicated Financial Blockchain company to integrate Financial Systems, Hedge Funds, Investors, Loan Servicers, Mortgage Brokers, Loan Originators and Fiat Investments with a uniquely designed Blockchain (CENTURION) for the secure, transparent, auditable delivery of Financial Services, tracking every transaction on out integrated financial partners.
          </LanTextMin>

          <DivCenter><Slide></Slide></DivCenter>
          
        </Nav>
      </section>
      
      <section id="vault">
        <div className="pt-1">
          <Zomato>Vault Explorer</Zomato>
          <Search />
          
          <DivCenter80>
            <Row xs={1} md={3} className="g-4">
              {Array.from(items).map((item, idx) => (
                <Col key={idx}>
                  <Card style={{border:0}}>
                    <Card.Img variant="top" src={item.img} style={{width:"8vh"}}/>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        {item.body}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </DivCenter80>
        </div>
      </section>
    </>
  );
};

export default Navbar;