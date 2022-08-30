import { Table, Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { ImZoomIn } from "react-icons/im";
function SimpleTable(props) {
  const [show, setShow] = useState(false);
  const [modalImage, setModalImage] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (code) => {
    setShow(true);
    setModalImage(code);
  };

  function checkPrice(name, code) {
    const text = `Salam. ${name},${code} qiyməti və mövcudluğu haqqında məlumat almaq istəyirəm. `
    window.open(`https://wa.me/994504962260?text=${text}`, "_blank")
  }
  return (
    <>
      <Table style={{width: "100%", fontSize: "0.8rem"}} size="sm" striped bordered hover>
        <thead>
          <tr>
            <th>№</th>
            <th>Ad</th>
            <th>Kod</th>
            <th>Şəkil</th>
            <th>AZN</th>
          </tr>
        </thead>
        <tbody>
          {props.spareParts.map((item, index) => {
            return (
              <tr key={index}>
                <td style={{ fontWeight: "bold" }}>{item.numInSchema}</td>
                <td>{item.azName}</td>
                <td>{item.code}</td>
                <td>
                  <div className="MagnifyingGlassDiv">
                    <img
                    loading="lazy"
                      alt={item.code}
                      style={{ width: 80 }}
                      src={`/images/selectedPhotos/parts/${item.code}.jpg`}
                      onClick={() => {
                        handleShow(item.code);
                      }}
                    />
                    <ImZoomIn className="MagnifyingGlass" />
                  </div>
                </td> 
                <td ><div onClick={()=>{checkPrice(item.azName,item.code)}} style={{display:"flex", justifyContent: "center"}}><img className="wpContact" style={{ width: 30 }} alt="Əlaqə" src="/images/wpLogo.png"/></div>  </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Modal centered={true} show={show} onHide={handleClose}>
        <img
        loading="lazy"
          style={{ minWidth: 300 }}
          alt={modalImage}
          src={`/images/selectedPhotos/parts/${modalImage}.jpg`}
        />
      </Modal>
    </>
  );
}

function Scheme(props) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", minWidth: 300 }}>
        <div style={{ textAlign: "center" }}>
          <h1>{props.data.azName}</h1>
          <img
          loading="lazy"
            style={{ width: "100%", maxWidth: "521px" }}
            alt={props.data.azName}
            src={`/images/selectedPhotos/schemas/${props.data.img}.jpg`}
          />
        </div>
      </div>

      <SimpleTable spareParts={props.data.spareParts} />
    </div>
  );
}

export default Scheme;
