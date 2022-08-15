import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SimpleCard(props) {
  return (
    <div
      onClick={props.onClick}
      style={{
        width: 250,
        height: 300,
        background: "blue",
        borderRadius: 50,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <img
        style={{ width: "100%" }}
        alt={props.name}
        src={`/images/${props.logo}Logo.png`}
      />
      <h2 style={{ textAlign: "center", color: "white" }}>{props.name}</h2>
    </div>
  );
}

export default SimpleCard;
