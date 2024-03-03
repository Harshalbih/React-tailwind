
import Buttonpage from "./pages/Buttonpage";
import Accordianpage from "./pages/Accordianpage";
import Dropdownpage from "./pages/Dropdownpage";
import Modalpage from "./pages/Modalpage";
import Tablepage from "./pages/Tablepage";
import Counterpage from "./pages/Counterpage";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="bg-gradient-to-r from-cyan-800 to-blue-500 col-span-5 min-h-screen">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Buttonpage />}/>
          <Route exact path="/accordian" element={<Accordianpage />}/>
          <Route exact path="/dropdown" element={<Dropdownpage/>}/>
          <Route exact path="/modal" element={<Modalpage />}/>
          <Route exact path="/table" element={<Tablepage />}/>
          <Route exact path="/counter" element={<Counterpage initialCount={10}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
