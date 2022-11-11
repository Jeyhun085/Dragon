import { Container } from "react-bootstrap";
import Brands from "./Brands";
import CatalogDropdown from "./CatalogDropdown";




function Intro () {
  return (
    <div>
      <img
        alt="Dragon Auto Parts"
        src={"/images/logo.png"}
        style={{
          width: "100%",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          paddingLeft: "20%",
          paddingRight: "20%",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            marginTop: "10%",
            width: "80%",

  
          }}
        >
          <span style={{ color: "red" }}>HAVAL</span> və{" "}
          <span style={{ color: "red" }}>GREAT WALL</span> modelləri üçün
          ehtiyat hissələrin bizim kataloqdan seçib online sifariş
          edə bilərsiniz!{" "}
        </h1>{" "}
      </div>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
      <CatalogDropdown />
      </div>
    </div>
  );
};

function IntroSection() {
  return (
    <Container style={{ marginTop: 20, marginBottom: 50 }}>
      <Intro />
    </Container>
  );
}



function Home() {
  return (
    <div>
      <IntroSection />
      {/* <Feautures  /> */}
      <Brands />
      
    </div>
  );
}

export default Home;
