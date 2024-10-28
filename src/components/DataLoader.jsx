import { Spinner, Container, Row, Col } from "react-bootstrap";
export default function DataLoader() {
  return (
    <Container fluid className="d-flex vh-100 p-5 justify-content-center">
      <Row>
        <Col className="text-center">
          <Spinner
            animation="border"
            role="status"
            variant="primary"
            style={{ width: "2rem", height: "2rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <div className="mt-3">Loading, please wait...</div>
        </Col>
      </Row>
    </Container>
  );
}
