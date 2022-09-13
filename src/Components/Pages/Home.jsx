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
  { image: "4.png",
    title: "Yüksək keyfiyyət",
    text: "Hər bir müştəri minimum xərclə - maksimum nəticə əldə etmək istəyir. Dragon komandasının mütəxəssisləri Sizə ən yüksək keyfiyyətli , etibarlı və uzunömürlü ehtiyat hissələrini təqdim etmək üçün mütəmadi olaraq Çinə səfər edərək , istehsalçı şirkətlərlə görüşlər keçirdir və ehtiyat hissələrini müvafiq testlərdən keçirdir.",
  },
  {  image: "2.png",
    title: "Münasib qiymət",
    text: "Dragon komandasının hədəfi Sizin bir ehtiyat hissəsini münasib qiymətə alıb və uzun müddət həmin ehityat hissəsi barədə düşünməməyinizdir – Keyfiyyət sərfəlidir. ",
  },
  { image: "1.png",
    title: "Sürətli çatdırılma ",
    text: "Siz Dragon-a getmiyəcəksiz, Dragon Sizə gələcək . Online satış portalından və ya zəng vasitəsilə istədiyiniz ehtiyat hissəsini seçməyiniz kifayət edəcək ki, Bakı şəhəri daxili 0 - 2 saat ərzində, regionlara isə 12 - 48 saat ərzində ehtiyat hissəsini asanlıqla əldə edəcəksiz. Online və ya yerində ödəmə imkanı mümkündür. ",
  },

  { image: "3.png",
    title: "Rahat alış",
    text: "Dragon komandası Sizə  Azərbaycanda analoqu olmayan ilk ehtiyat hissələri portalı təqdim edir. Portal vasitəsi ilə lazım olan ehtiyat hissəsini düzgün və rahat seçmək çox asan olacaq. ",
  },

  { image: "6.png",
    title: "Professional xidmət ",
    text: "Bəzən texniki nasazlığı aradan qaldırmaq üçün yanlış ehtiyat hissələrini almaq riskləri olur. Eyni model avtomobillər fərqli texniki göstəricilərə malik olduğundan , fərqli ehtiyat hissələri ilə təhciz olunur. Yanlış ehtiyat hissəsini almaq riski Dragon komandasının professional mütəxəssisləri sayəsində minimum dərəcəyə düşəcək.",
  },

  { image: "5.png",
    title: "Mütəxəssis konsultasiyası",
    text: "Düzgün seçim etmək Dragon ilə daha asandır. Siz ehiyat hissəsini satıcıdan deyil – Mütəxəssislərdən alacaqsız.  Dragon komandası Sizə düzgün ehtiyat hissələrinin seçimində faydalı konsultasiya verməyə hər zaman hazırdır. ",
  },
];

const TagCanvas = ({ ...rest }) => {
  useEffect(() => {
    const TagCanvas = window.TagCanvas;
    const tagCanvasOptions = {
      textColour: "red",
      outlineThickness: 0.5,
      outlineColour: "#FE0853",
      maxSpeed: 0.01,
      freezeActive: true,
      shuffleTags: true,
      shape: "sphere",
      zoom: 0.8,
      wheelZoom: false,
      noSelect: true,
      textFont: null,
      freezeDecel: true,
      noMouse: true,
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

     <img  alt="Dragon Auto Parts" src={"/images/logo.png"} style={{width:"100%", display:"flex", alignContent:"center" , justifyContent:"center", paddingLeft:"20%", paddingRight:"20%"}}/>   
     <div
     
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
   
     <h1 style={{ marginTop:"10%",
            width: "80%",
        
            fontSize: "calc(15px + 1vw)",
          }}
        >
          <span style={{ color: "red" }}>HAVAL</span> və{" "}
          <span style={{ color: "red" }}>GREAT WALL</span> modelləri üçün
          ehtiyat hissələrin bizim{" "}
          <span> kataloqdan</span> seçib online
          sifariş edə bilərsiniz! </h1>   </div>
          <div
        style={{ marginTop: 20,
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Button style={{ width: "auto",  padding: 10}} variant="danger" href="/catalog/new">
          Kataloqa keçid
        </Button>
      </div>
      <canvas
        id="tagcanvas"
        width={window.innerWidth > 600 ? 900 : 400}
        height={window.innerWidth > 600 ? 600 : 500}
        
        style={{
          width: "100%",
          zIndex: "1",
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
      <TagCanvas  />
    </Container>
  );
}

function Feautures() {
  return (
    <div style={{ marginTop: 30 }}>
      <Container style={{ textAlign: "center" }}>
        <h2
          style={{ marginBottom: 30,
          fontSize: "calc(20px + 2vw)", 
          }}
        >
          Niyə məhz biz?
        </h2>
        <Row>
          {featureCardsInfo.map((feature, index) => {
            return (
              <Col key={index} md={4} sm={12}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom:"30px" }}>
                  <Card  
                   
                    style={{ width: "18rem", height: "450px"}}
                    className="mb-2"
                  > <Card.Body>
                  <Card.Img  src={`/images/${feature.image}`} style={{ width: "80px", borderRadius: 50, margin:10}} />
                   
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
      <Feautures  />
    </div>
  );
}

export default Home;
