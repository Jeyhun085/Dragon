
import HashLoader from "react-spinners/HashLoader";

export default function Spinner() {
  return (
    <div className="spinnerDiv">
      <HashLoader style={{ margin: "auto" }} size="100px" color="#ff0000" />
    </div>
  );
}
