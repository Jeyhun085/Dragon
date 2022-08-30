import {data} from "../../../Data";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  changeModel,
  changeBrand,
  changeModification,
  restart
} from "../../redux/group";
import { useNavigate } from "react-router-dom";
import SimpleCard from "./SimpleCard";
import "bootstrap/dist/css/bootstrap.min.css";


function ChooseBrand() {
  const dispatch = useDispatch();
  return (
    <Row >
      {data.brandList.map((item, index) => {
        return (
          <Col key={index} style={{marginTop: 10, display: "flex", justifyContent: "center"}}>
            <SimpleCard
              
              onClick={() => {
                dispatch(changeBrand(item.value));
              }}
              name={item.name}
              logo={item.value}
            />
          </Col>
        );
      })}
    </Row>
  );
}

function ChooseModel() {
  const dispatch = useDispatch();
  const group = useSelector((state) => state.group);
  return (
    <Row  >
      {data.modelList[group.brand].map((item, index) => {
        return (
          <Col key={index} style={{marginTop: 10, display: "flex", justifyContent: "center"}}>
            <SimpleCard
              onClick={() => {
                dispatch(changeModel(item.value));
              }}
              name={item.name}
              logo={item.value}
            />
          </Col>
        );
      })}
    </Row>
  );
}

function ChooseModification() {
  const dispatch = useDispatch();
  const group = useSelector((state) => state.group);
  let navigate = useNavigate();
  return (
    <Row  >
      {data.modificationList[group.model].map((item, index) => {
        return (
          <Col key={index} style={{marginTop: 10, display: "flex", justifyContent: "center"}}>
            <SimpleCard
              onClick={() => {
                dispatch(changeModification(item.value))
                navigate(`/catalog/${item.value}`)
              }}
              name={item.name}
              logo={item.value}
            />
          </Col>
        );
      })}
    </Row>
  );
}

function CatalogNew() {
  const group = useSelector((state) => state.group);
  const dispatch = useDispatch();

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", minHeight: "100vh"}}>
        <Container>
        <Button style={{ marginTop: "3%"}} variant="secondary" onClick={()=>{dispatch(restart())}}>Seçimi yenilə</Button>
          {group.brand === "" && <ChooseBrand />}
          {group.brand !== "" && group.model === "" && <ChooseModel />}
          {group.brand !== "" &&
            group.model !== "" &&
            group.modification === "" && <ChooseModification />}
        </Container>
    </div>
  );
}

export default CatalogNew;
