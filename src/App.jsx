// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";           // move Home out of main.jsx to /pages/Home.jsx
import HABProject from "./pages/HABProject";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/hab" element={<HABProject />} />
      </Routes>
    </Router>
  );
}
