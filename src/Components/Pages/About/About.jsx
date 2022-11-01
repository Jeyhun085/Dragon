import { Container, Row, Card, Col } from "react-bootstrap";

const featureCardsInfo = [
  {
    image: "4.png",
    title1: "Yüksək keyfiyyət",
    title2: " Münasib qiymət",
  },
  
  
  {
    image: "1.png",
    title1: "Sürətli çatdırılma ",
    title2: "Rahat alış",
  
  },

  

  {
    image: "6.png",
    title1: "Professional xidmət ",
    title2: "Mütəxəssis konsultasiyası ",
  
  },


];

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
                    style={{ width: "18rem", height: "250px", }}
                    className="mb-2"
                  >
                    {" "}
                    <Card.Body>
                      <Card.Img
                        src={`/images/${feature.image}`}
                        style={{ width: "120px", borderRadius: 50, margin: 10 }}
                      />

                      <Card.Title><h6>{feature.title1}</h6></Card.Title>
                      <hr></hr>
                      <Card.Title><h6>{feature.title2}</h6></Card.Title>
              
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

function About() {
  return (
    <div>
      <h2 style={{ marginBottom: 30, marginTop: 30,  fontSize: "calc(20px + 2vw)", textAlign: "center"  }}>
        Bizimle daha yaxindan tanish olun.
      </h2>
      <Container style={{ padding:20,  width: "100%",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                paddingLeft: "5%",
                 textAlign: "center"  }}  >
        <Row>
          <Col md={4} sm={12}>
          Hər bir müştəri minimum xərclə - maksimum nəticə əldə etmək istəyir. Dragon komandasının mütəxəssisləri Sizə ən yüksək keyfiyyətli , etibarlı və uzunömürlü ehtiyat hissələrini təqdim etmək üçün mütəmadi olaraq Çinə səfər edərək , istehsalçı şirkətlərlə görüşlər keçirdir və ehtiyat hissələrini müvafiq testlərdən keçirdir.
          Dragon komandasının hədəfi Sizin bir ehtiyat hissəsini münasib qiymətə alıb və uzun müddət həmin ehityat hissəsi barədə düşünməməyinizdir – Keyfiyyət sərfəlidir.
          Siz Dragon-a getmiyəcəksiz, Dragon Sizə gələcək . Online satış portalından və ya zəng vasitəsilə istədiyiniz ehtiyat hissəsini seçməyiniz kifayət edəcək ki, Bakı şəhəri daxili 0 - 2 saat ərzində, regionlara isə 12 - 48 saat ərzində ehtiyat hissəsini asanlıqla əldə edəcəksiz. Online və ya yerində ödəmə imkanı mümkündür.
          Dragon komandası Sizə  Azərbaycanda analoqu olmayan ilk ehtiyat hissələri portalı təqdim edir. Portal vasitəsi ilə lazım olan ehtiyat hissəsini düzgün və rahat seçmək çox asan olacaq.
          Bəzən texniki nasazlığı aradan qaldırmaq üçün yanlış ehtiyat hissələrini almaq riskləri olur. Eyni model avtomobillər fərqli texniki göstəricilərə malik olduğundan , fərqli ehtiyat hissələri ilə təhciz olunur. Yanlış ehtiyat hissəsini almaq riski Dragon komandasının professional mütəxəssisləri sayəsində minimum dərəcəyə düşəcək.
          Düzgün seçim etmək Dragon ilə daha asandır. Siz ehiyat hissəsini satıcıdan deyil – Mütəxəssislərdən alacaqsız.  Dragon komandası Sizə düzgün ehtiyat hissələrinin seçimində faydalı konsultasiya verməyə hər zaman hazırdır. 

          </Col>
          <Col>
            <img
              alt="Dragon Auto Parts"
              src={"/images/exapmle.jpg"}
              style={{
                width: "100%",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                paddingLeft: "5%",
                paddingRight: "5%",
              }}
            />
          </Col>
        </Row>
      </Container>
      <Feautures />
    </div>
  );
}
export default About;
