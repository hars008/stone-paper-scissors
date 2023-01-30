import "./App.css";
import EasyGame from "./EasyGame";
import HardGame from "./HardGame";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <Router>
    <NavBar/>
      <Routes>
        <Route path="/" element={<EasyGame />} />
        <Route path="/hard" element={<HardGame />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
