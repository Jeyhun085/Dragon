import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Brands from "./Brands";
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

  {
    image: "3.png",
    title: "Rahat alış",
    text: "Dragon komandası Sizə  Azərbaycanda analoqu olmayan ilk ehtiyat hissələri portalı təqdim edir. Portal vasitəsi ilə lazım olan ehtiyat hissəsini düzgün və rahat seçmək çox asan olacaq. ",
  },

  {
    image: "6.png",
    title: "Professional xidmət ",
    text: "Bəzən texniki nasazlığı aradan qaldırmaq üçün yanlış ehtiyat hissələrini almaq riskləri olur. Eyni model avtomobillər fərqli texniki göstəricilərə malik olduğundan , fərqli ehtiyat hissələri ilə təhciz olunur. Yanlış ehtiyat hissəsini almaq riski Dragon komandasının professional mütəxəssisləri sayəsində minimum dərəcəyə düşəcək.",
  },

  {
    image: "5.png",
    title: "Mütəxəssis konsultasiyası",
    text: "Düzgün seçim etmək Dragon ilə daha asandır. Siz ehiyat hissəsini satıcıdan deyil – Mütəxəssislərdən alacaqsız.  Dragon komandası Sizə düzgün ehtiyat hissələrinin seçimində faydalı konsultasiya verməyə hər zaman hazırdır. ",
  },
];

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
        {/* <Button
          style={{ width: "auto", padding: 10 }}
          variant="danger"
          href="/catalog/new"
        >
          Kataloqa keçid
        </Button> */}
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

function Feautures() {
  return (
    <div style={{ marginTop: 30 }}>
      <Container style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: 30, fontSize: "calc(20px + 2vw)" }}>
          Niyə məhz biz?
        </h2>
        <Row>
          {featureCardsInfo.map((feature, index) => {
            return (
              <Col key={index} md={4} sm={12}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "30px",
                  }}
                >
                  <Card
                    style={{ width: "18rem", height: "450px" }}
                    className="mb-2"
                  >
                    {" "}
                    <Card.Body>
                      <Card.Img
                        src={`/images/${feature.image}`}
                        style={{ width: "80px", borderRadius: 50, margin: 10 }}
                      />

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
      <IntroSection />
      {/* <Feautures  /> */}
      <Brands />
      
    </div>
  );
}

export default Home;
