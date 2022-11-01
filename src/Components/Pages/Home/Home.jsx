import { Container } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CatalogDropdown from "./CatalogDropdown";

const featureCardsInfo = [
  {
    image: "4.png",
    title: "Yüksək keyfiyyət",
    text: "Hər bir müştəri minimum xərclə - maksimum nəticə əldə etmək istəyir. Dragon komandasının mütəxəssisləri Sizə ən yüksək keyfiyyətli , etibarlı və uzunömürlü ehtiyat hissələrini təqdim etmək üçün mütəmadi olaraq Çinə səfər edərək , istehsalçı şirkətlərlə görüşlər keçirdir və ehtiyat hissələrini müvafiq testlərdən keçirdir.",
  },
  {
    image: "2.png",
    title: "Münasib qiymət",
    text: "Dragon komandasının hədəfi Sizin bir ehtiyat hissəsini münasib qiymətə alıb və uzun müddət həmin ehityat hissəsi barədə düşünməməyinizdir – Keyfiyyət sərfəlidir. ",
  },
  {
    image: "1.png",
    title: "Sürətli çatdırılma ",
    text: "Siz Dragon-a getmiyəcəksiz, Dragon Sizə gələcək . Online satış portalından və ya zəng vasitəsilə istədiyiniz ehtiyat hissəsini seçməyiniz kifayət edəcək ki, Bakı şəhəri daxili 0 - 2 saat ərzində, regionlara isə 12 - 48 saat ərzində ehtiyat hissəsini asanlıqla əldə edəcəksiz. Online və ya yerində ödəmə imkanı mümkündür. ",
  },



function Intro() {
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

            fontSize: "calc(15px + 1vw)",
          }}
        >
          <span style={{ color: "red" }}>HAVAL</span> və{" "}
          <span style={{ color: "red" }}>GREAT WALL</span> modelləri üçün
          ehtiyat hissələrin bizim <span> kataloqdan</span> seçib online sifariş
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
}

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
    </div>
  );
}

export default Home;
