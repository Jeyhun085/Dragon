import { Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import OutputPage from "./Pages/Catalog/CatalogSelected";
import CatalogMain from "./Pages/Catalog/CatalogMain";
import CatalogNew from "./Pages/Catalog/CatalogNew";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog" element={<CatalogMain />} />
        <Route path="catalog/:modelNumber" element={<OutputPage />} />
        <Route path="catalog/new" element={<CatalogNew />} />
      </Routes>
    </div>
  );
}

export default App;
