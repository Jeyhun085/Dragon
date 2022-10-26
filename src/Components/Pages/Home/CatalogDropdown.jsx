import { Fragment, useState } from "react";
import { Dropdown, ButtonGroup, DropdownButton } from "react-bootstrap";
import { data } from "../../../Data";

function CatalogDropdown() {
  const [brand, setBrand] = useState("Brand");
  const [modelsList, setModelsmodelsList] = useState([]);
  const [model, setModel] = useState("Model");
  const [modificationList, setModificationList] = useState([]);


  function handleBrandChange(value) {
    setBrand(value);
    value === "Haval"
      ? setModelsmodelsList(data.modelList.haval)
      : setModelsmodelsList(data.modelList.gw);
      setModel("Model")

  }

  function handleModelChange(model) {
    setModel(model.name);
    setModificationList(data.modificationList[model.value])
  }

  return (
    <Fragment>
      <Dropdown style={{gap:1, alignItems: "center"}} as={ButtonGroup}>
        <DropdownButton title={brand}>
          <Dropdown.Item
            onClick={() => {
              handleBrandChange("Haval");
            }}
          >
            Haval
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              handleBrandChange("Great Wall");
            }}
          >
            Great Wall
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          disabled={brand !== "Brand" ? false : true}
          title={model}
        >
          {modelsList.map((model) => (
            <Dropdown.Item onClick={() => {handleModelChange(model)}}>{model.name}</Dropdown.Item>
          ))}
        </DropdownButton>
        <DropdownButton disabled={model !== "Model" ? false : true} title="Modifikasiya">
        {modificationList.map((model) => (
            <Dropdown.Item onClick={() => {window.location=`/catalog/${model.value}`}}>{`${model.name} (${model.value})`}</Dropdown.Item>
          ))}
        </DropdownButton>
      </Dropdown>
    </Fragment>
  );
}

export default CatalogDropdown;
