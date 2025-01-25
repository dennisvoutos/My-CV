import { SUMMARY_MESSAGE } from "../../constants";
import "./Summary.css";
const Summary = () => {
  return (
    <div className="container">
      <h3>Summary</h3>
      <hr className="line" />
      <div className="content">
        <div></div>
        <div style={{ maxWidth: "900px" }}>{SUMMARY_MESSAGE}</div>
        <div></div>
      </div>
    </div>
  );
};
export default Summary;
