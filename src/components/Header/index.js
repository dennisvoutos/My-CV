import "./Header.css";
import {
  EMAIL,
  GITHUB_PAGE,
  LINKEDIN_PAGE,
  PHONE_NUMBER,
} from "../../constants";
export const Header = () => {
  return (
    <div className="headerContainer">
      <h2>Dionysios Voutos</h2>
      <div className="sideBySide">
        <div>{EMAIL} | </div>
        <div style={{ marginLeft: "5px" }}> {PHONE_NUMBER}</div>
      </div>
      <div style={{ padding: "5px" }}>
        <a href={LINKEDIN_PAGE}>{LINKEDIN_PAGE}</a>
      </div>
      <div className=" sideBySide">
        <div>Github: </div>
        <a href={GITHUB_PAGE} style={{ marginLeft: "5px" }}>
          {GITHUB_PAGE}
        </a>
      </div>
    </div>
  );
};
