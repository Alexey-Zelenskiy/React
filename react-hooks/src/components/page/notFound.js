import ErrorMessage from "../errorMessage";
import {Button, Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import React from "react";

const NotFound = () => {
  return (
    <>
      <ErrorMessage/>
      <Row>
        <Col>
          <Button>
            <Link className="text-info d-flex" to='/'>Back home</Link>
          </Button>
        </Col>
      </Row>
    </>
  )
};
export default NotFound;