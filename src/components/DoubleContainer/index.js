import "./DoubleContainer.css";
// this is meant to be a container for the education and the work experience segments
import { Education } from "../Education";
import { WorkExperience } from "../WorkExperience";
const DoubleContainer = () => {
  return (
    <div className="worknEducationContainer">
      <div className="leftElement">
        <WorkExperience />
      </div>
      <div className="rightElement">
        <Education />
      </div>
    </div>
  );
};
export default DoubleContainer;
