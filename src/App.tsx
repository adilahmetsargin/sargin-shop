import { Routes, Route, } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex justify-center flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="pages" element={<About />} />
        <Route path="products" element={<About />} />
        <Route path="shop" element={<About />} />
        <Route path="cart" element={<About />} />
        <Route path="contact" element={<About />} />
        <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;