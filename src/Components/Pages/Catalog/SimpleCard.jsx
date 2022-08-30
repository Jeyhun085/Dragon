

function SimpleCard(props) {
  return (
    <div
      onClick={props.onClick}
      style={{ marginTop:20,
        width: 250,
        height: 300,
        background: "#ffffffae",
        borderRadius: 30,
        display: "flex", alignItems:"center",
        flexDirection: "column",
        justifyContent: "end",
        border:"1px solid #d1d1d1",
        boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) "
      }}
    >
      <img
      loading="lazy"
        style={{ width: "100%", height:"auto" }}
        alt={props.name}
        src={`/images/${props.logo}Logo.png`}
      />
      <h3 style={{ textAlign: "center", color: "red", marginBottom:"10px", marginTop:"30px", fontWeight:"400" }}>{props.name}</h3>
    </div>
  );
}

export default SimpleCard;
