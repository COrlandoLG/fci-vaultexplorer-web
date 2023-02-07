import { Container, Row, Col} from "react-bootstrap";
import logo from "../../images/logo.png";

export const Zfooter = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="pt-4 bg-dark zfot">
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col xs={3} className="mt-3">
              <img id="logo" src={logo} alt="Logo" style={{height: '100px'}} />
            </Col>
            <Col xs={3} className="mt-3">
              <h6 className="text-uppercase">Governance</h6>
              <h6 className="text-uppercase">About Us</h6>
              <h6 className="text-uppercase">Terms of USe</h6>
            </Col>
            <Col xs={3} className="mt-3">
              <h6 className="text-uppercase">Docs</h6>
              <h6 className="text-uppercase">Technical Paper</h6>
              <h6 className="text-uppercase">Privacy Policy</h6>
            </Col>
            <Col xs={3} className="mt-3">
              <h6 className="text-uppercase">FAQs</h6>
              <h6 className="text-uppercase">Contact</h6>
            </Col>
          </Row>
          <Row className="pt-5">
            <div className="zfot">
              Copyright © CENTURION BLOCKCHAIN {year}
            </div>
          </Row>
        </Container>        
      </footer>
    </>
  );
};
