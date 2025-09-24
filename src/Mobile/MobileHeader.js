import {
  EMAIL,
  GITHUB_PAGE,
  LINKEDIN_PAGE,
  openInNewTab,
  PHONE_NUMBER,
} from "../constants";

const MobileHeader = ({ theme }) => {
  return (
    <div
      className={`mobile-header ${
        theme === "experimental"
          ? "mobile-experimental-header"
          : "mobile-professional-header"
      }`}
    >
      <div className="mobile-name-section">
        <h1 className="mobile-name-title">Dionysios Voutos</h1>
        <h3 className="mobile-subtitle">Software Developer</h3>
      </div>

      <div className="mobile-contact-section">
        <div className="mobile-contact-item">
          <span className="mobile-contact-icon">✉️</span>
          <a href={`mailto:${EMAIL}`} className="mobile-contact-text">
            {EMAIL}
          </a>
        </div>

        <div className="mobile-contact-item">
          <span className="mobile-contact-icon">📞</span>
          <a href={`tel:${PHONE_NUMBER}`} className="mobile-contact-text">
            {PHONE_NUMBER}
          </a>
        </div>

        <div className="mobile-contact-item">
          <span className="mobile-contact-icon">💼</span>
          <div
            onClick={() => openInNewTab(LINKEDIN_PAGE)}
            className="mobile-contact-link"
          >
            LinkedIn Profile
          </div>
        </div>

        <div className="mobile-contact-item">
          <span className="mobile-contact-icon">🚀</span>
          <div
            onClick={() => openInNewTab(GITHUB_PAGE)}
            className="mobile-contact-link"
          >
            GitHub Portfolio
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
