import "./Header.css";
import {
  EMAIL,
  GITHUB_PAGE,
  LINKEDIN_PAGE,
  openInNewTab,
  PHONE_NUMBER,
} from "../../constants";

const Header = ({ theme }) => {
  return (
    <div
      className={`headerContainer ${
        theme === "experimental" ? "experimental-header" : ""
      }`}
    >
      <h2 className="name-title">Dionysios Voutos</h2>
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-icon">✉️</span>
          <span>{EMAIL}</span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">📞</span>
          <span>{PHONE_NUMBER}</span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">💼</span>
          <div
            onClick={() => openInNewTab(LINKEDIN_PAGE)}
            className="contact-link"
            style={{ cursor: "pointer" }}
          >
            LinkedIn Profile
          </div>
        </div>
        <div className="contact-item">
          <span className="contact-icon">🚀</span>
          <div
            onClick={() => openInNewTab(GITHUB_PAGE)}
            className="contact-link"
            style={{ cursor: "pointer" }}
          >
            GitHub Portfolio
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
