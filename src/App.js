import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import Classification from "./pages/classification/Classification";
import Timeline from "./pages/timeline/Timeline";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path="/" element={<Timeline />} />
            <Route path="/classification" element={<Classification />} />
          </Routes>
        <Footer />  
      </BrowserRouter>
    </div>
  );
}

export default App;
