import { SUMMARY_MESSAGE } from "../constants";

const MobileSummary = ({ theme }) => {
  return (
    <div
      className={`mobile-summary ${
        theme === "experimental"
          ? "mobile-experimental-summary"
          : "mobile-professional-summary"
      }`}
    >
      <h3 className="mobile-section-title">About Me</h3>
      <div className="mobile-summary-content">
        <p className="mobile-summary-text">{SUMMARY_MESSAGE}</p>
      </div>
    </div>
  );
};

export default MobileSummary;
