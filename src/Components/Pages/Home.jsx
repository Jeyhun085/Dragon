import { Container } from "react-bootstrap";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const models = [
  { img: "C30" },
  { img: "C50" },
  { img: "M2" },
  { img: "M4" },
  { img: "W5" },
  { img: "W6" },
  { img: "W7" },
  { img: "H3" },
  { img: "H5" },
  { img: "H6" },
  { img: "H2" },
  { img: "H2n" },
  { img: "H6n" },
  { img: "H9" },
  { img: "Hover" },
];

const featureCardsInfo = [
  {
    title: "Yüksək keyfiyyət",
    text: "Hər bir müştəri minimum xərclə - maksimum nəticə əldə etmək istəyir. Dragon komandasının mütəxəssisləri sizə ən yüksək keyfiyyətli , etibarlı və uzunömürlü ehtiyat hissələrini təqdim etmək üçün mütəmadi olaraq Çinə səfər edərək , istehsalçı şirkətlərlə görüşlər keçirdir və ehtiyat hissələrini müvafiq testlərdən keçirdir.",
  },
  {
    title: "Münasib qiymət",
    text: "Dragon komandasının hədəfi sizin bir ehtiyat hissəsini münasib qiymətə alıb və uzun müddət həmin ehityat hissəsi barədə düşünməməyinizdir – Keyfiyyət sərfəlidir. ",
  },
  {
    title: "Sürətli çatdırılma ",
    text: "Siz Dragon-a getmiyəcəksiz, Dragon sizə gələcək . Online satış portalından və ya zəng vasitəsilə istədiyiniz ehtiyat hissəsini seçməyiniz kifayət edəcək ki, Bakı şəhəri daxili 0 - 2 saat ərzində, regionlara isə 12 - 48 saat ərzində ehtiyat hissəsini asanlıqla əldə edəcəksiz. Online və ya yerində ödəmə imkanı mümkündür. ",
  },

  {
    title: "Rahat alış",
    text: "Dragon komandası sizə  Azərbaycanda analoqu olmayan ilk ehtiyat hissələri portalı təqdim edir. Portal vasitəsi ilə lazım olan ehtiyat hissəsini düzgün və rahat seçmək çox asan olacaq. ",
  },

  {
    title: "Professional xidmət ",
    text: "Bəzən texniki nasazlığı aradan qaldırmaq üçün yanlış ehtiyat hissələrini almaq riskləri olur.Eyni model avtomobillər fərqli texniki göstəricilərə malik olduğundan – Fərqli ehtiyat hissələri ilə təhciz olunur. Yanlış ehtiyat hissəsini almaq riski Dragon komandasının professional mütəxəssisləri sayəsində minimum dərəcəyə düşəcək.",
  },

  {
    title: "Mütəxəssis konsultasiyası",
    text: "Düzgün seçim etmək Dragon ilə daha asandır. Siz ehiyat hissəsini satıcıdan deyil – Mütəxəssislərdən alacaqsız.  Dragon komandası sizə düzgün ehtiyat hissələrinin seçimində faydalı konsultasiya verməyə hər zaman hazırdır. ",
  },
];

const TagCanvas = ({ ...rest }) => {
  useEffect(() => {
    const TagCanvas = window.TagCanvas;
    const tagCanvasOptions = {
      textColour: "red",
      outlineThickness: 0.5,
      outlineColour: "#FE0853",
      maxSpeed: 0.03,
      freezeActive: true,
      shuffleTags: true,
      shape: "sphere",
      zoom: 0.8,
      wheelZoom: false,
      noSelect: true,
      textFont: null,
      freezeDecel: true,
      fadeIn: 500,
      initial: [0.3, -0.1],
      depth: 1.1,
    };
    try {
      TagCanvas.Start("tagcanvas", "taglist", tagCanvasOptions);
    } catch (e) {
      console.log("Canvas error.");
      console.log(e);
    }
  }, []);


  return (
    <div>
      <canvas
        id="tagcanvas"
        width={window.innerWidth > 600 ? 900 : 400}
        height={window.innerWidth > 600 ? 600 : 500}

        style={{
          width: "100%",
          zIndex: "99",
          position: "relative",
          margin: "0 auto"
        }}
        className="to-fade-in fast-anim"
      ></canvas>
      <div id="taglist" style={{ display: "none" }}>
        <ul>
          {models.map((model) => (
            <li key={model.img}>
              <a href={`#${model.img}`}>
                <img
                  alt={model.img}
                  src={`/images/tagCanvas/TagCanvas${model.img}.png`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function TagCanvasSection() {
  return (
    <Container style={{ marginTop: 20 }}>
      <TagCanvas />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            width: "80%",
            fontFamily: "Comfortaa",
            fontSize: "calc(15px + 1vw)",
          }}
        >
          <span style={{ color: "red" }}>"HAVAL"</span> və{" "}
          <span style={{ color: "red" }}>"GREAT WALL"</span> modelləri üçün
          ehtiyat hissələrin bizim{" "}
          <span style={{ color: "red" }}> Kataloqdan </span> secib onlayn
          sifariş edə bilərsiniz!
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Button style={{ width: "50%" }} variant="primary" href="/catalog/new">
          Kataloqa keçid
        </Button>
      </div>
    </Container>
  );
}

function Feautures() {
  return (
    <div style={{ marginTop: 100 }}>
      <Container style={{ textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "Montserrat",
            fontSize: "calc(20px + 3vw)",
          }}
        >
          Niyə məhz biz?
        </h1>
        <Row>
          {featureCardsInfo.map((feature, index) => {
            return (
              <Col key={index} md={4} sm={12}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Card
                    bg="light"
                    style={{ width: "18rem", height: "350px" }}
                    className="mb-2"
                  >
                    <Card.Body>
                      <Card.Title>{feature.title}</Card.Title>
                      <Card.Text>{feature.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

function Home() {
  return (
    <div>
      <TagCanvasSection />
      <Feautures />
    </div>
  );
}

export default Home;
