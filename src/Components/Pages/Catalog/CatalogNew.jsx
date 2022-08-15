import {data} from "../../../Data";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  changeModel,
  changeBrand,
  changeModification,
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
          <Col style={{marginTop: 10, display: "flex", justifyContent: "center"}}>
            <SimpleCard
              key={index}
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
          <Col  style={{marginTop: 10, display: "flex", justifyContent: "center"}}>
            <SimpleCard
              key={index}
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
          <Col style={{marginTop: 10, display: "flex", justifyContent: "center"}}>
            <SimpleCard
              key={index}
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
  

  return (
    <div>
        <Container>
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
