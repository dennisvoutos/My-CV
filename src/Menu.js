import { Education } from "./components/Education";
import Header from "./components/Header";
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
    </>
  );
};
export default Menu;
