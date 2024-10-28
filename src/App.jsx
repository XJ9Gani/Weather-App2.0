import { Col, Row, Container } from "react-bootstrap";
import { Header, CitySearchForm } from "./components";
import Left from "./components/Left";
export default function App() {
  return (
    <>
      <Header />
      <br />

      <Container>
        <Row>
          <Col>
            <CitySearchForm />
          </Col>
          <Col>
            <Left />
          </Col>
        </Row>
      </Container>
    </>
  );
}
