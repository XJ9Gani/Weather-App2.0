import { Container } from "react-bootstrap";
export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        height: "20vh",
        position: "sticky",
        top: 0,
        left: 0,
        backgroundColor: " rgb(18, 101, 179)",
      }}
    >
      <Container className="bg-dark m-0 p-0"></Container>
    </header>
  );
}
