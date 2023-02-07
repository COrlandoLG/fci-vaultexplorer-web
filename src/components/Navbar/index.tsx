import "../../styles/custom.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarTop = ({ classToShow = 'navHome navbar-dark bg-dark' }) => {
  
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className={classToShow} fixed="top">
        <Container>
          <Navbar.Brand href="/#">CENTURION FINTECH</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">              
            </Nav>
            <Nav>
              <Nav.Link href="/#blockchain">Blockchains Services</Nav.Link>
              <Nav.Link href="/#fintech">Fintech Services</Nav.Link>
              <Nav.Link href="/#cNFT">cNFT</Nav.Link>
              <Nav.Link href="/#network">Network</Nav.Link>
              <Nav.Link href="/#pricing">Developers</Nav.Link>
              <Nav.Link href="/vault">Vault</Nav.Link>
              <Nav.Link href="/vault">Explorer</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarTop;