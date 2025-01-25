import { Education } from "./components/Education";
import Header from "./components/Header";
import { Certifications } from "./components/Helpers/Certifications";
import Summary from "./components/Summary";
import { TechSkills } from "./components/TechSkills";
import { WorkExperience } from "./components/WorkExperience";
const Menu = () => {
  return (
    <>
      <Header />
      <Summary />
      <WorkExperience />
      <Education />
      <TechSkills />
      <Certifications />
    </>
  );
};
export default Menu;
