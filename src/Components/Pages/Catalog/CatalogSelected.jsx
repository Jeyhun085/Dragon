import { modificationsData } from "../../../Data";
import { Container, Button, Row, Col, ButtonGroup } from "react-bootstrap";
import { useParams, useSearchParams } from "react-router-dom";
import qs from "query-string";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Scheme from "./Scheme";
import SimpleCard from "./SimpleCard";

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
          {modificationsData[modelNumber].sections.map((item, index) => {
            return (
              <Col
                key={index}
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
                    loading="lazy"
                    width="100%"
                    alt={item.name}
                    src={`/images/selectedPhotos/mainSchemas/${item.img}.jpg`}
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
      schema: parseInt(event.target.alt),
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
                key={item.index}
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
                    loading="lazy"
                    width="100%"
                    alt={item.index}
                    src={`/images/selectedPhotos/schemas/${item.img}.jpg`}
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

function ComingSoon() {
  function handleClick(model) {
    window.location.href = `/catalog/${model}`;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <h1 style={{ paddingLeft: "5%", paddingRight: "5%" }}>
          Tezliklə Sizin avtomobilə aid olan məlumatlar tam hazır olacaq!
        </h1>
        <img
          loading="lazy"
          style={{ maxWidth: "100%" }}
          alt="Tezlikle"
          src="/images/ComingSoon.png"
        />
         
        <h2 style={{ paddingLeft: "10%", paddingRight: "10%" , marginBottom:"2%"}}>
          Hələlik aşagıdaki link vasitəsi ilə WhatsApp üzərindən bizim
          mütəxəssislərlə əlaqə saxlaya bilərsiniz.
        </h2>
        <Button variant="success" href="https://wa.me/994514556655">
          WhatsApp ilə əlaqə
        </Button>{" "}
        <div style={{ padding: "2%" }}>
          <h1  style={{ padding: "2%" }}> Hazır olan modellər</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SimpleCard
              onClick={() => {
                handleClick("CC7150CE00");
              }}
              logo="CC7150CE00"
              name="1.5L Benzin Mexanika"
            />
          </div>
        </div>
      </div>
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
    setschema(queryParam.schema);
  }, [searchParams, queryParam.section, queryParam.schema]);

  function decreaseSchema(currentNum) {
    const newNum = Number(currentNum);
    const queryParam = qs.parse(window.location.search);
    const newQueryParam = {
      ...queryParam,
      schema: newNum - 1,
    };
    setSearchParams(newQueryParam);
  }

  function backToSections() {
    const queryParam = qs.parse(window.location.search);
    const newQueryParam = {
      section: queryParam.section,
    };
    setSearchParams(newQueryParam);
  }

  function increaseSchema(currentNum) {
    const newNum = Number(currentNum);
    const queryParam = qs.parse(window.location.search);
    const newQueryParam = {
      ...queryParam,
      schema: newNum + 1,
    };
    setSearchParams(newQueryParam);
  }

  function NavButtons() {
    return (
      <ButtonGroup aria-label="Basic example">
        <Button
          onClick={() => {
            decreaseSchema(schema);
          }}
          disabled={schema === undefined ? true : schema == 1 ? true : false}
          variant="secondary"
        >
          {"<"}
        </Button>
        <Button
          variant="secondary"
          disabled={section === undefined ? true : false}
          onClick={() => {
            setSearchParams();
          }}
        >
          Modelə qayıt
        </Button>
        <Button
          disabled={schema === undefined ? true : false}
          variant="secondary"
          onClick={() => {
            backToSections();
          }}
        >
          Bölməyə qayıt
        </Button>
        <Button
          onClick={() => {
            increaseSchema(schema);
          }}
          disabled={
            schema === undefined
              ? true
              : schema == modificationsData[modelNumber][section].length
              ? true
              : false
          }
          variant="secondary"
        >
          {">"}
        </Button>
      </ButtonGroup>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "3%",
          paddingBottom: "3%",
        }}
      >
        <NavButtons />
      </div>

      {modificationsData[modelNumber] === false ? (
        <ComingSoon />
      ) : section === undefined && schema === undefined ? (
        <ModificationSelected />
      ) : schema === undefined ? (
        <SectionSelected section={section} />
      ) : (
        <Scheme data={modificationsData[modelNumber][section][schema - 1]} />
      )}
    </div>
  );
}

export default OutputPage;
