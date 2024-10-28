import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  Col,
  Row,
  ListGroup,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCityData } from "../store/slices/weatherSclice";
import DataLoader from "../components/DataLoader";
import citiesData from "../city.list.json/city.list.json";
export default function CitySearchForm() {
  const [city, setCity] = useState("Almaty");
  const [searchResults, setSearchResults] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(city);

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.weather);

  const getData = (cityName) => {
    dispatch(getCityData(cityName));
    setCity("");
    setSearchResults([]);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(city);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [city]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const filteredCities = citiesData.filter((city) =>
        city.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setSearchResults(filteredCities.slice(0, 10));
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (data) {
      console.log("Fetched data:", data);
    }
    if (error) {
      console.error("Error fetching data:", error);
    }
  }, [data, error]);

  const handleCitySelect = (e) => {
    setCity(e.target.value);
  };

  console.log(data);
  return (
    <>
      <Container className="d-flex position-relative">
        <Form.Control
          type="text"
          value={city}
          onChange={handleCitySelect}
          placeholder="Введите название города"
        />
      </Container>

      <Container>
        <ListGroup
          className="mt-1 position-absolute z-1 m-5"
          style={{ width: "70%" }}
        >
          {searchResults.map((city) => (
            <ListGroup.Item
              key={city.id}
              onClick={() => getData(city.name)}
              style={{ cursor: "pointer" }}
            >
              {city.name}, {city.country}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>

      {loading && <DataLoader />}
      {error && <Alert variant="danger">{}</Alert>}
      {data && (
        <Container className="d-flex justify-content-center">
          <Card className="m-5" style={{ maxWidth: "400px", margin: "auto" }}>
            <Card.Header>
              <Card.Title className="text-center">
                Weather in {data.name}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col className="m-3">
                  <p>
                    <img
                      src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                      alt="Weather Icon"
                    />
                  </p>
                </Col>
              </Row>

              <Row>
                <Col xs={6}>
                  <p>
                    <b>Temperature:</b> {data.main.temp} °C
                  </p>
                </Col>
                <Col xs={6}>
                  <p>
                    <b>State:</b> {data.weather[0].description}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <p>
                    <b>Wind Speed:</b> {data.wind.speed} m/s
                  </p>
                </Col>
                <Col xs={6}>
                  <p>
                    <b>Humidity:</b> {data.main.humidity} %
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      )}
    </>
  );
}
