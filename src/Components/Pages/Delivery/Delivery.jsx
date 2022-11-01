import { Container, Row, Card, Col } from "react-bootstrap";

function Delivery() {
    return (
      <div>
        <h2 style={{ marginBottom: 30, marginTop: 30,  fontSize: "calc(20px + 2vw)", textAlign: "center"  }}>
          Bizimle daha yaxindan tanish olun.
        </h2>
        <Container style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  padding:"5%"
                   }}  >
          <Row>
            <Col md={4} sm={12}>
              Consequat aliquip incididunt ipsum culpa elit minim in aute non.
              Pariatur Lorem laboris ut ea excepteur aute dolor enim fugiat
              proident. Ad ex nisi occaecat enim id officia mollit cillum
              incididunt nisi reprehenderit reprehenderit commodo. Consequat aliquip incididunt ipsum culpa elit minim in aute non.
              Pariatur Lorem laboris ut ea excepteur aute dolor enim fugiat
              proident. Ad ex nisi occaecat enim id officia mollit cillum
              incididunt nisi reprehenderit reprehenderit commodo
              officia mollit cillum
              incididunt nisi reprehenderit reprehenderit commodo. Consequat aliquip incididunt ipsum culpa elit minim in aute non.
              Pariatur Lorem laboris ut ea excepteur aute dolor enim fugiat
              proident. Ad ex nisi occaecat enim id officia mollit cillum
              incididunt nisi reprehenderit reprehenderit commodo
            </Col>
            <Col>
              <img
                alt="Dragon Auto Parts"
                src={"/images/delivery.jpg"}
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
            export default Delivery;