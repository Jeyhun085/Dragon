import React from "react";
import Container from "react-bootstrap/Container";
import { BsWhatsapp, BsInstagram, BsGeoAltFill } from "react-icons/bs";

export default function Footer() {
  return (
      <Container fluid style={{ textAlign: "center", backgroundColor: "rgb(43, 49, 47)", marginTop:" 20px", padding:"20px", 
      }}>
        <div>
          <a href="https://wa.me/994514556655" style={{ paddingLeft: "10px",  }}>
            <BsWhatsapp color="#fff" size={24}  />
          </a>
          <a style={{ paddingLeft: "30px" }} href="https://www.instagram.com/dragon_auto_parts/">
            <BsInstagram color="#fff" size={24} />
          </a>
          <a style={{ paddingLeft: "30px",}} href="https://goo.gl/maps/JnAfNXfhcrMGJvyf9">
            <BsGeoAltFill color="white"  size={24} />
          </a>
          <p style={{ paddingTop: "20px", color:"white"  }}>
            © 2022 Copyright:{" "}
            <a style={{ color:"white", textDecoration:"none" }} href="https://dragon.az/">
              Dragon.az
            </a>
          </p>
          <p style={{fontSize: "12px",  color:"white", }}>Created by: Jeyhun and Aysel</p>
        </div>
      </Container>
  );
}
