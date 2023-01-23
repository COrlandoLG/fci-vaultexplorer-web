import React from "react";
import Navbar from "../../components/Navbar/index";
import { Zfooter } from "../../components/zfooter/zfooter";
import Search from "../../components/search/search";
import { Nav, Bars, Zomato, LanText, LanTextMin, DivCenter, DivCenter80 } from "../../components/Navbar/Navbar";
import Slide from "../../components/Navbar/rerousel";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import card1 from "../../images/hand-money-cash-hold-coins.svg";
import card2 from "../../images/group-svgrepo-com.svg";
import card3 from "../../images/coin-cryptocurrency-exchange.svg";
import card4 from "../../images/piled-files.svg";
import card5 from "../../images/integration.svg";
import card6 from "../../images/profit-increase-chart.svg";
import bc from "../../images/BC.png";
import bc1 from "../../images/blockchain.webp";
import { Accordion, CardGroup, Carousel, Badge } from "react-bootstrap";
import { GiTrade, GiMoneyStack } from 'react-icons/gi';
import { SiBlockchaindotcom, SiWebmoney, SiHiveBlockchain } from 'react-icons/si';
import { BsWallet } from 'react-icons/bs';
import { CgToolbox } from 'react-icons/cg';
import { TbWaveSawTool } from 'react-icons/tb';

export const Landing: React.FC = () => {

  const items = [
    {img:card1, title:"Loan Servicing", body:"Track your loan transactions."},
    {img:card2, title:"Wrapping of Tokens", body:"Manage your Fiat investments using your crypto or Fiat, get paid in Fiat or Crypto."},
    {img:card3, title:"Exchange & Assignment", body:"Direct peer-to-peer trading of yourNFT investments between Investors."},
    {img:card4, title:"Collateralized Debt Pool", body:"Loan Pools for Draw Loans"},
    {img:card5, title:"Tokenized Fund Management", body:"Tokenize your real state, loan portfolios or other investments in professional fund management systems integrated to the CENTURION blockchain."},
    {img:card6, title:"Smart Investor Distributions", body:"Automatic Investor Distributions via US Dollars or crypto."}
  ];

  return (
    <>
      <section id="landing">
        <Nav>
          <Bars>Get the App Log in Sign up</Bars>
          <Navbar />

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
                    <Card.Img variant="top" src={item.img} style={{width:"10vh",paddingLeft:"2vh"}}/>
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

      <section id="desc-1" className="pt-5">
        <DivCenter80>
          <Card>
            <Card.Header as="h5">CENTURION FINTECH</Card.Header>
            <Card.Body>  
              <div className="row">
                <div className="col">
                  <p>Centurion is thriving at being the goto protocol for launching technologies that work on both Fiat or Crypto, we have created the bridge to go from Bank accounts to Crypto or Crypto payments to your bank account.</p>
                  <p>With our vast experience of more than 15 years creating financial solutions for Institutional Investors and funds, we bring to the table technologies that currently manage tens of billions of dolars to all cryto Investors and for all of the investors using our current technologies we bring you access to the Crypto opportunities.</p> 
                </div>
                <div className="col">
                  <Card.Img variant="top" src={bc1}/>
                </div>
              </div>
              {/* <Button variant="secondary" className="float-end">&#8592; Back</Button> */}
            </Card.Body>
          </Card>
        </DivCenter80>   
      </section>

      <section id="desc-2" className="pt-5">
        <DivCenter80>
          <Card>
            <Card.Header as="h5">Fintech Services</Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header> <GiTrade/>	&nbsp; TradEX</Accordion.Header>
                  <Accordion.Body>
                    Blockchain asset exchange for Collateralized Loans, Securitizations, Debts and Receivables and cNFTs.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header> <BsWallet/>	&nbsp; Centurion Wallet</Accordion.Header>
                  <Accordion.Body>
                    Keep your digital assets safe.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header> <SiBlockchaindotcom/>	&nbsp; Centurion cNFT</Accordion.Header>
                  <Accordion.Body>
                    Collateralized Non Fungable Tokens.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header> <SiWebmoney/>	&nbsp; KYC</Accordion.Header>
                  <Accordion.Body>
                    Know your Customer database and registration, verified against largest financial crime databases.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header> <GiMoneyStack/>	&nbsp; Merchant Account</Accordion.Header>
                  <Accordion.Body>
                    Accept crypto or US Dolar Payments.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header> <TbWaveSawTool/>	&nbsp; Invest: Available tools like...</Accordion.Header>
                  <Accordion.Body>
                    <Badge bg="light" text="dark">DeFi Save & Crypto Staking</Badge>
                    <Badge bg="light" text="dark">Centurion Invest</Badge>
                    <Badge bg="light" text="dark">AutoPilot Grow</Badge>
                    <Badge bg="light" text="dark">Partials & available cashflows from collaterilized Notes or CNFTs</Badge>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header> <CgToolbox/>	&nbsp; Finance Tools</Accordion.Header>
                  <Accordion.Body>
                    <Badge bg="light" text="dark">Crypto Loan Origination</Badge>
                    <Badge bg="light" text="dark">Dolar Loans Origination</Badge>
                    <Badge bg="light" text="dark">Collateralized Loans with assets</Badge>
                    <Badge bg="light" text="dark">Crypto Asset management</Badge>
                    <Badge bg="light" text="dark">Fund Mamagement</Badge>
                    <Badge bg="light" text="dark">Trust Accounting</Badge>
                    <Badge bg="light" text="dark">Trust Account Management</Badge>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header> <SiHiveBlockchain/>	&nbsp; 3rd Paty Services: 3rd Party Services are provided by our Partner Businesses.</Accordion.Header>
                  <Accordion.Body>
                    <Badge bg="light" text="dark">Payment Services</Badge>
                    <Badge bg="light" text="dark">Loan Servicing & Regulation Technology</Badge>
                    <Badge bg="light" text="dark">Invoice Servicing</Badge>
                    <Badge bg="light" text="dark">Debts and Receivables</Badge>
                    <Badge bg="light" text="dark">Rent Collections</Badge>
                    <Badge bg="light" text="dark">HOA Collections</Badge>
                    <Badge bg="light" text="dark">Client Billing</Badge>
                    <Badge bg="light" text="dark">3rd party Invoicing</Badge>
                    <Badge bg="light" text="dark">Real Estate purchases</Badge>
                    <Badge bg="light" text="dark">Personal trust accounts</Badge>
                    <Badge bg="light" text="dark">Fund Mamagement</Badge>
                    <Badge bg="light" text="dark">Private equity funds</Badge>
                    <Badge bg="light" text="dark">Trust Accounting</Badge>
                    <Badge bg="light" text="dark">Trust Account Management</Badge>
                    <Badge bg="light" text="dark">Tokenization of business ownership</Badge>
                    <Badge bg="light" text="dark">Custody Services</Badge>
                    <Badge bg="light" text="dark">Spot exchange between established currencies and cryptocurrencies</Badge>
                    <Badge bg="light" text="dark">Smart Contract development for any of the Centurion Network of Blockchains</Badge>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              {/* <Button variant="secondary" className="float-end">&#8592; Back</Button> */}
            </Card.Body>
          </Card>
        </DivCenter80>   
      </section>

      <section id="desc-3" className="pt-5">
        <DivCenter80>
          <Card>
            <Card.Header as="h5">Blockchains Services</Card.Header>
            <Card.Body>
              <CardGroup>
                <Card>
                  <Card.Img variant="top" src={bc} />
                  <Card.Body>
                    <Card.Title>HyperLedger Fabric Blockchain</Card.Title>
                    <Card.Text>
                      Record your financial transactions on the blockchain, work with our team to deploy your infraestructure onto the blockchain.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={bc} />
                  <Card.Body>
                    <Card.Title>Centurion IPFS Blockchain</Card.Title>
                    <Card.Text>
                      Share your files on the Centurion IPFS blockchain securely, this tool keeps track of all the changes, version control of your document to streamline the zero-knowledge proof.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={bc} />
                  <Card.Body>
                    <Card.Title>Centurion Blockchain</Card.Title>
                    <Card.Text>
                      Our dedicated Financial blockchain that containd the bridge between the Fiat and Crypto financial protocols, immplementing and scaling with cross-chain technology and integrationg different financial intitutions to our fintech services.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>              
            </Card.Body>
          </Card>
        </DivCenter80>
      </section>

      <section id="desc-4" className="pt-5">
        <DivCenter80>
          <Card>
            <Card.Header as="h5">Centurion Network</Card.Header>
            <Card.Body>
              <Card.Title>Centurion Network</Card.Title>
              <Card.Text>
                Conection of all the Centurion Blockchains
              </Card.Text>
            </Card.Body>
          </Card>
        </DivCenter80> 
      </section>

      <section id="desc-5" className="pt-5">
        <DivCenter80>
          <Card>
            <Card.Header as="h5">Reasons</Card.Header>
            <Card.Body>
              <Carousel variant="dark" fade>
                <Carousel.Item interval={6000}>
                  <img
                    className="d-block mx-auto h-50 w-50 mb-5 pb-5"
                    src={bc1}
                    alt="First slide"
                  />
                  <div className="pb-5">
                    <Carousel.Caption>
                      <h5>Why Implement a HyperLedger Fabric Blockchain</h5>
                      <p>To make an easy transition that records all the transactions on all Centurion Technology for our clients</p>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                  <img
                    className="d-block mx-auto h-50 w-50 mb-5 pb-5"
                    src={bc1}
                    alt="Second slide"
                  />
                  <div className="pb-5">
                    <Carousel.Caption>
                      <h5>Why build our own blockchain</h5>
                      <p>To have the financial standards for backups, security, Access Control, encryption, Cluster and Load balancing, patch management, retention policies, and many more benefits</p>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                  <img
                    className="d-block mx-auto h-50 w-50 mb-5 pb-5"
                    src={bc1}
                    alt="Third slide"
                  />
                  <div className="pb-5">
                    <Carousel.Caption>
                      <h5>Why Build our own IPSF Blockchain</h5>
                      <p>For our customers to be able to upload, track and share their financial documents with the security Centurion provides</p>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                  <img
                    className="d-block mx-auto h-50 w-50 mb-5 pb-5"
                    src={bc1}
                    alt="Third slide"
                  />
                  <div className="pb-5">
                    <Carousel.Caption>
                      <h5>Why build our own network</h5>
                      <p>Own Network, so we can control fees and trades between all our users</p>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
        </DivCenter80>   
      </section>

      <section id="desc-6" className="pt-5">
        <DivCenter80>
          <Card>
            <Card.Header as="h5">END Goal</Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                We could become the Technology provider for Central Banks For Digital Currency
              </Card.Text>
              <img
                    className="d-block mx-auto"
                    src="https://gumlet.assettype.com/freepressjournal/2022-01/9b31e368-e704-48c4-9523-f51fc134410f/Goal.jpg?format=webp&w=800&dpr=1.0"
                    alt="Third slide"
                  />
            </Card.Body>
          </Card>
        </DivCenter80>   
      </section>

      <Zfooter/>      
    </>
  );
};
