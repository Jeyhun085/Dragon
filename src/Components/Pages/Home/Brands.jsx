import { Tab, Tabs, Container, Row, Col } from "react-bootstrap";
import SimpleCard from "../Catalog/SimpleCard";
import { data } from "../../../Data";

function Brands() {
  return (
    <div>
      <Container
        style={{ marginBottom: 25, marginTop: 20, textAlign: "center" }}
      >
        <h2>Modellər</h2>
        <div
          style={{
            borderRadius: 10,
            border: "1px solid #d1d1d1",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) ",
          }}
        >
          <Tabs
            defaultActiveKey="haval"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="haval" title="Haval">
              <Container style={{ padding: "10px" }}>
                <Row style={{ padding: "2px" }}>
                  {data.modelList.haval.map((item, index) => {
                    return (
                      <Col
                        key={index}
                        className="scaleItems"
                        style={{
                          marginTop: 10,
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <SimpleCard  name={item.name} logo={item.value} />
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="greatWall" title="Great Wall">
              <Container style={{ padding: 10 }}>
                <Row>
                  {data.modelList.gw.map((item, index) => {
                    return (
                      <Col
                        key={index}
                        className="scaleItems"
                        style={{
                          marginTop: 10,
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <SimpleCard name={item.name} logo={item.value} />
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
}

export default Brands;
