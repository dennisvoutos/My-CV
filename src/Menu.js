import DoubleContainer from "./components/DoubleContainer";
import { Education } from "./components/Education";
import Header from "./components/Header";
import Summary from "./components/Summary";
import { WorkExperience } from "./components/WorkExperience";
const Menu = () => {
  return (
    <>
      <Header />
      <Summary />
      <WorkExperience />
      <Education />
    </>
  );
};
export default Menu;
