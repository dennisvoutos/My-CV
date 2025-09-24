import { SUMMARY_MESSAGE } from "../../constants";
import "./Summary.css";

const Summary = ({ theme }) => {
  return (
    <div
      className={`container ${
        theme === "experimental" ? "experimental-container" : ""
      }`}
    >
      <h3 className="section-title">Summary</h3>
      <hr className="line" />
      <div className="content">
        <div className="summary-content">{SUMMARY_MESSAGE}</div>
      </div>
    </div>
  );
};
export default Summary;
