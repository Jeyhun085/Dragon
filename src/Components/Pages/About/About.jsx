import { Container, Row, Card, Col } from "react-bootstrap";

const featureCardsInfo = [
  {
    image: "icon1.png",
    title1: "Yüksək keyfiyyət",
    title2: " Sizə ən yüksək keyfiyyətli, münasib qiymətli, etibarlı və uzunömürlü ehtiyat hissələrini təqdim edirik.",
    background: "linear-gradient(  170deg,   hsl(247deg 100% 63%) 31%, hsl(258deg 100% 81%) 82%, hsl(0deg 0% 100%) 100%) ",
  },

  {
    image: "icon2.png",
    title1: "Sürətli çatdırılma ",
    title2: " Bakı şəhəri daxili 0 - 2 saat ərzində, regionlara isə 12 - 48 saat ərzində ehtiyat hissəsini asanlıqla əldə edəcəksiz.",
    background: "linear-gradient(  170deg,hsl(163deg 94% 28%) 31%,hsl(102deg 49% 56%) 82%,hsl(58deg 98% 60%) 100%)",
  },

  {
    image: "icon3.png",
    title1: "Professional xidmət ",
    title2: "Dragon komandası Sizə düzgün ehtiyat hissələrinin seçimində faydalı konsultasiya verməyə hər zaman hazırdır. ",
    background: "linear-gradient(170deg,hsl(359deg 100% 63%) 31%,hsl(35deg 100% 56%) 82%,hsl(58deg 98% 60%) 100%)",
  },
];

function Feautures() {
  return (
    <div style={{ marginTop: 30 }}>
      <Container style={{ textAlign: "center" }}>
        <h2 style={{ padding:"30px" }}>
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
                    style={{ width: "18rem", height: "320px" , boxShadow:  "12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3); "}}
                    className="mb-2">
                    {" "}
                    <Card.Body>
                      <Card.Img
                        src={`/images/${feature.image}`}
                        style={{
                          width: "100px",
                          borderRadius: 50,
                          margin: 10,
                          background: feature.background,
                        }}
                      />
 
                      <Card.Title>
                        <h6><strong>{feature.title1}</strong></h6>
                      </Card.Title>
                      <hr></hr>
                      <Card.Title>
                        <h6>{feature.title2}</h6>
                      </Card.Title>
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
      <h2
        style={{
        
         padding:10,
          textAlign: "center",
        }}
      >
      Bizimlə daha yaxından tanış olun!
      </h2>
      <Container
        style={{
          padding: 10,
          width: "100%",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
    
        
        }}
      >
        <Row>
          <Col md={6} sm={12}style={{ padding:"auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
          
              }} >
             Hər bir müştəri minimum xərclə - maksimum nəticə əldə etmək istəyir.
            Dragon komandasının mütəxəssisləri Sizə ən yüksək keyfiyyətli ,
            etibarlı və uzunömürlü ehtiyat hissələrini təqdim etmək üçün
            mütəmadi olaraq Çinə səfər edərək , istehsalçı şirkətlərlə görüşlər
            keçirdir və ehtiyat hissələrini müvafiq testlərdən keçirdir. Dragon
            komandasının hədəfi Sizin bir ehtiyat hissəsini münasib qiymətə alıb
            və uzun müddət həmin ehityat hissəsi barədə düşünməməyinizdir –
            Keyfiyyət sərfəlidir.
            
          </Col>
          <Col className="car-for-delivery">
            <img 
              alt="Dragon Auto Parts"
              src={"/images/delivery-car.png"}
              style={{ marginTop:"5%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
          
              }}
            />
          </Col>
        </Row>
        
      </Container>
      
      <Feautures /><Container>
  
      <div>
      <h2
    style={{
   padding:10,
          textAlign: "center",
        }}
      >
      Siz Dragon-a getmiyəcəksiniz, Dragon Sizə
            gələcək!
      </h2>
      <p  className="delivery-text">
 Online satış portalından və ya zəng vasitəsilə istədiyiniz
            ehtiyat hissəsini seçməyiniz kifayət edəcək ki, Bakı şəhəri daxili 0
            - 2 saat ərzində, regionlara isə 12 - 48 saat ərzində ehtiyat
            hissəsini asanlıqla əldə edəcəksiz. Online və ya yerində ödəmə
            imkanı mümkündür. Dragon komandası Sizə Azərbaycanda analoqu olmayan
            ilk ehtiyat hissələri portalı təqdim edir. Portal vasitəsi ilə lazım
            olan ehtiyat hissəsini düzgün və rahat seçmək çox asan olacaq.<br>

            </br> Bəzən texniki nasazlığı aradan qaldırmaq üçün yanlış ehtiyat hissələrini
            almaq riskləri olur. Eyni model avtomobillər fərqli texniki
            göstəricilərə malik olduğundan , fərqli ehtiyat hissələri ilə təhciz
            olunur. Yanlış ehtiyat hissəsini almaq riski Dragon komandasının
            professional mütəxəssisləri sayəsində minimum dərəcəyə düşəcək.
            Düzgün seçim etmək Dragon ilə daha asandır. Siz ehiyat hissəsini
            satıcıdan deyil – Mütəxəssislərdən alacaqsız. Dragon komandası Sizə
            düzgün ehtiyat hissələrinin seçimində faydalı konsultasiya verməyə
            hər zaman hazırdır.</p></div></Container>
    </div>
  );
}
export default About;
