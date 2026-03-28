import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Cristalens from "./components/Cristalens";
import ACIOL55D from "./components/ACIOL55D";
import ACIOL65D from "./components/ACIOL65D";
import Aqua750 from "./components/Aqua750";
import Pearl750 from "./components/Pearl750";
import Gells from "./components/Gells";
import Injectors from "./components/Injectors";
import SMISuture from "./components/SMISuture";
import SurgicalKnife from "./components/SurgicalKnife";
import UVGell from "./components/UVGell";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/cristalens" element={<Cristalens />} />
            <Route path="/products/ac-iol-5-5d" element={<ACIOL55D />} />
            <Route path="/products/ac-iol-6-5d" element={<ACIOL65D />} />
            <Route path="/products/aqua-750" element={<Aqua750 />} />
            <Route path="/products/pearl-750" element={<Pearl750 />} />
            <Route path="/products/gells" element={<Gells />} />
            <Route path="/products/injectors" element={<Injectors />} />
            <Route path="/products/smi-suture" element={<SMISuture />} />
            <Route path="/products/surgical-knife" element={<SurgicalKnife />} />
            <Route path="/products/uv-gell" element={<UVGell />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;
