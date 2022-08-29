import React from "react";
import Container from "react-bootstrap/Container";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
      <Container fluid style={{ textAlign: "center", backgroundColor: "grey", paddingTop: 5 }}>
        <div>
          <a href="https://wa.me/994514556655">
            <BsWhatsapp color="green" size={30} />
          </a>
          <a style={{ paddingLeft: "20px" }} href="https://www.instagram.com/dragon_auto_parts/">
            <BsInstagram color="#C13584" size={30} />
          </a>
          <p>
            © 2022 Copyright:{" "}
            <a className="text-dark" href="https://dragon.az/">
              Dragon.az
            </a>
          </p>
        </div>
      </Container>
  );
}
