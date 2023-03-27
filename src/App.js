import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/landing/Landingpage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </Router>
  );
}

export default App;
