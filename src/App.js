
import Buttonpage from "./pages/Buttonpage";
import Accordianpage from "./pages/Accordianpage";
import Dropdownpage from "./pages/Dropdownpage";
import Sliderpage from "./pages/Sliderpage";
import Modalpage from "./pages/Modalpage";
import Tablepage from "./pages/Tablepage";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="bg-gradient-to-r from-cyan-800 to-blue-500 col-span-5 min-h-screen">
      <Router>
        <Routes>
          <Route exact path="/" element={<Buttonpage />}/>
          <Route exact path="/accordian" element={<Accordianpage />}/>
          <Route exact path="/dropdown" element={<Dropdownpage/>}/>
          <Route exact path="/slider" element={<Sliderpage />}/>
          <Route exact path="/modal" element={<Modalpage />}/>
          <Route exact path="/table" element={<Tablepage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
