  import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/victor.png";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.webp";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={13} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={20} sm={6} className="text-center text-sm-end">
          <div className="social-icon" style={{ marginTop: "20px" }} >
            <a href="https://github.com/VictorMartins77"><img src={navIcon1} alt="Icon" /></a>
            <a href="https://www.linkedin.com/in/victor-ferreira-martins-028b0422a/"><img src={navIcon2} alt="Icon" /></a>
          </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
