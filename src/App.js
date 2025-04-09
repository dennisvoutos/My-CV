import "./App.css";
import Menu from "./Menu";
import { isMobile } from "react-device-detect";
import { MobileMenu } from "./MobileMenu";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }} className="App">
      {isMobile ? <MobileMenu /> : <Menu />}
    </div>
  );
}

export default App;
