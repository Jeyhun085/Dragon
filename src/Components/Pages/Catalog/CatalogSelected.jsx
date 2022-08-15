import { modificationsData } from "../../../Data";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useParams, useSearchParams } from "react-router-dom";
import qs from "query-string";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Scheme from "./Scheme"

function ModificationSelected() {
  let { modelNumber } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();

  function handleSectionChange(event) {
    const queryParam = qs.parse(window.location.search);
    const newQueryParam = {
      ...queryParam,
      section: event.target.alt,
    };
    setSearchParams(newQueryParam);
  }

  return (
    <div>
      <Container fluid>
        <Row lg={3}>
          {modificationsData[modelNumber].sections.map((item) => {
            return (
              <Col
                style={{
                  marginTop: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    borderColor: "red",
                    border: "solid",
                    minWidth: 300,
                  }}
                >
                  <h1>{item.azName}</h1>
                  <img
                    width="100%"
                    alt={item.name}
                    src={`/images/systemPhotos/${item.img}.jpg`}
                    onClick={(e) => {
                      handleSectionChange(e);
                    }}
                    value={item.name}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

function SectionSelected(props) {
  let { modelNumber } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  function handleSchemaChange(event) {
    const queryParam = qs.parse(window.location.search);
    const newQueryParam = {
      ...queryParam,
      schema: event.target.alt,
    };
    setSearchParams(newQueryParam);
  }

  return (
    <div>
      <Container fluid>
        <Row lg={3}>
          {modificationsData[modelNumber][props.section].map((item) => {
            return (
              <Col
                style={{
                  marginTop: 10,
                  display: "flex",
                  justifyContent: "center",
                  minWidth: 300,
                }}
                className="123"
              >
                <div
                  style={{
                    textAlign: "center",
                    borderColor: "red",
                    border: "solid",
                    
                  }}
                >
                  <h1>{item.azName}</h1>
                  <img
                    width="100%"
                    alt={item.index}
                    src={`/images/systemPhotos/${item.img}.jpg`}
                    onClick={(e) => {
                      handleSchemaChange(e);
                    }}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}




function OutputPage() {
  const queryParam = qs.parse(window.location.search);
  const [section, setSection] = useState(queryParam.section);
  const [schema, setschema] = useState(queryParam.schema);
  let { modelNumber } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setSection(queryParam.section);
    setschema(queryParam.schema)
  }, [searchParams, queryParam.section, queryParam.schema]); 
  return (
    <div>
      {section === undefined &&  schema === undefined? <ModificationSelected />  : schema === undefined ? <SectionSelected section={section}/> : <Scheme data={modificationsData[modelNumber][section][schema-1]}/>}
    </div>
  );
}

export default OutputPage;
