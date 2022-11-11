import { Container, Row, Col } from "react-bootstrap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Contact() {
  return (
    <div>
      <h2 style={{ marginBottom: 30, marginTop: 30, textAlign: "center" }}>
        Bizimlə əlaqə saxlayın.
      </h2>
      <Container
        className="mapContainer"
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          padding: "5%",
        }}
      >
        <Row>
          <Col
            className="location"
            md={4}
            sm={12}
            style={{ marginTop: 50, paddingLeft: "5%", paddingRight: "5%" }}
          >
            <div style={{ display: "flex", justifyContent: "left" }}>
              <LocationOnIcon size={30} /> <p>Babek prospekti</p>
            </div>

            <div style={{ display: "flex", justifyContent: "left" }}>
              <PhoneInTalkIcon size={30} /> <p>+994514556655</p>
            </div>

            <div style={{ display: "flex", justifyContent: "left" }}>
              <WhatsAppIcon size={30} /> <p>+994514556655</p>
            </div>

            <div style={{ display: "flex", justifyContent: "left" }}>
              <MailOutlineIcon size={30} /> <p>jeyhun.asgarov@mail.ru</p>
            </div>
          </Col>
          <Col>
            <img
              alt="Dragon Auto Parts"
              src={"/images/map-ex.jpg"}
              style={{
                width: "100%",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                paddingLeft: "5%",
                paddingRight: "5%",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Contact;
