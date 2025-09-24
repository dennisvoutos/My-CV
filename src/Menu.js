import { Education } from "./components/Education";
import Header from "./components/Header";
import { Certifications } from "./components/Helpers/Certifications";
import { PersonalProjects } from "./components/PersonalProjects";
import Summary from "./components/Summary";
import { TechSkills } from "./components/TechSkills";
import { WorkExperience } from "./components/WorkExperience";

const Menu = ({ theme }) => {
  return (
    <>
      <Header theme={theme} />
      <Summary theme={theme} />
      <WorkExperience theme={theme} />
      <Education theme={theme} />
      <TechSkills theme={theme} />
      <PersonalProjects theme={theme} />
      <Certifications theme={theme} />
    </>
  );
};
export default Menu;
