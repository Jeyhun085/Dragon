import React from "react";
import Container from "react-bootstrap/Container";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
      <Container fluid style={{ textAlign: "center", backgroundColor: "#f3f3f3", paddingTop:"20px" }}>
        <div>
          <a href="https://wa.me/994514556655" style={{ paddingLeft: "20px",  }}>
            <BsWhatsapp color="#25D366" size={30}  />
          </a>
          <a style={{ paddingLeft: "20px" }} href="https://www.instagram.com/dragon_auto_parts/">
            <BsInstagram color="#DD2A7B" size={30} />
          </a>
          <p style={{ paddingTop: "20px",  }}>
            © 2022 Copyright:{" "}
            <a className="text-dark" href="https://dragon.az/">
              Dragon.az
            </a>
          </p>
        </div>
      </Container>
  );
}
