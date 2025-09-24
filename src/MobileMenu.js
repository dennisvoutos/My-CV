import MobileHeader from "./Mobile/MobileHeader";
import MobileSummary from "./Mobile/MobileSummary";
import MobileTechSkills from "./Mobile/MobileTechSkills";
import MobileWorkExperience from "./Mobile/MobileWorkExperience";
import MobileEducation from "./Mobile/MobileEducation";
import MobilePersonalProjects from "./Mobile/MobilePersonalProjects";

export const MobileMenu = ({ theme, onThemeChange }) => {
  return (
    <div
      className={`mobile-container ${
        theme === "experimental"
          ? "mobile-experimental-theme"
          : "mobile-professional-theme"
      }`}
    >
      {/* Mobile Theme Switcher */}
      <div className="mobile-theme-switcher">
        <h4 className="mobile-theme-title">Theme</h4>
        <div className="mobile-theme-options">
          <button
            className={`mobile-theme-button ${
              theme === "professional" ? "active" : ""
            }`}
            onClick={() => onThemeChange({ target: { value: "professional" } })}
          >
            Professional
          </button>
          <button
            className={`mobile-theme-button ${
              theme === "experimental" ? "active" : ""
            }`}
            onClick={() => onThemeChange({ target: { value: "experimental" } })}
          >
            Experimental
          </button>
        </div>
      </div>

      <MobileHeader theme={theme} />
      <MobileSummary theme={theme} />
      <MobileTechSkills theme={theme} />
      <MobileWorkExperience theme={theme} />
      <MobileEducation theme={theme} />
      <MobilePersonalProjects theme={theme} />
    </div>
  );
};
