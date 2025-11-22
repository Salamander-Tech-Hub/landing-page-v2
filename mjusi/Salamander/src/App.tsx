import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Hero";
import Contact from "./pages/Contact";
import AboutPage from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element= {<AboutPage/>} />
       </Routes>
    </Router>
  );
}

export default App;
