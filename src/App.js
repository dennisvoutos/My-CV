import "./App.css";
import Menu from "./Menu";
import { isMobile } from "react-device-detect";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("professional");

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className={`App ${
        theme === "experimental" ? "experimental-theme" : "professional-theme"
      }`}
    >
      <div className="cv-download">
        <a
          href="/MyCV.pdf"
          download="Dionysios_Voutos_CV.pdf"
          className={`download-btn ${
            theme === "experimental"
              ? "experimental-download"
              : "professional-download"
          }`}
        >
          <span className="download-icon">📄</span>
          Download CV
        </a>
      </div>
      <div className="theme-selector">
        <fieldset>
          <legend>Theme Selection</legend>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="theme"
                value="professional"
                checked={theme === "professional"}
                onChange={handleThemeChange}
              />
              Professional
            </label>
            <label>
              <input
                type="radio"
                name="theme"
                value="experimental"
                checked={theme === "experimental"}
                onChange={handleThemeChange}
              />
              Experimental
            </label>
          </div>
        </fieldset>
      </div>
      {isMobile ? <MobileMenu theme={theme} /> : <Menu theme={theme} />}
    </div>
  );
}

export default App;
