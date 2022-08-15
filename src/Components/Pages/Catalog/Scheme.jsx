import { Table, Button, Modal} from "react-bootstrap";
import React, { useState } from 'react';



function SimpleTable(props) {
  const [show, setShow] = useState(false);
  const [modalImage, setModalImage] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (code) => {
    setShow(true)
    setModalImage(code)};
  return (
    <>
    <Table size="sm" striped bordered hover>
      <thead>
        <tr>
          <th>№</th>
          <th>Ad</th>
          <th>Kod</th>
          <th>Şəkil</th>
        </tr>
      </thead>
      <tbody>
        {props.spareParts.map((item) => {
          return (
            <tr>
              <td style={{ fontWeight: "bold" }}>{item.numInSchema}</td>
              <td>{item.azName}</td>
              <td>{item.code}</td>
              <td>
                <img
                  alt={item.code}
                  style={{ width: 80 }}
                  src={`/images/systemPhotos/${item.code}.jpg`}
                  onClick={()=>{handleShow(item.code)}}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>

    
      <Modal centered={true} show={show} onHide={handleClose}>
      <img style={{minWidth: 300}} alt={modalImage} src={`/images/systemPhotos/${modalImage}.jpg`}/>
      </Modal>
    </>
  );
}

function Scheme(props) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", minWidth: 300 }}>
        <img
          style={{ width: "100%", maxWidth: "521px" }}
          alt={props.data.azName}
          src={`/images/systemPhotos/${props.data.img}.jpg`}
        />
      </div>

      <SimpleTable spareParts={props.data.spareParts} />
    </div>
  );
}

export default Scheme;
