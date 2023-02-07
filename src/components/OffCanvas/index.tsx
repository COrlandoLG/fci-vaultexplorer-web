import { Card, Col, Offcanvas } from "react-bootstrap";
import { useState } from "react";

const OffCanvasCustom = ({ ...props }) => {  
    const [show, setShow] = useState(0);

    const handleClose = () => setShow(0);
    const handleShow = (id:number) => {/*setShow(id)*/};
  
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
};

export default OffCanvasCustom;