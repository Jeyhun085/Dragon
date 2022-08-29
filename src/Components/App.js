import { Routes, Route } from "react-router-dom";

import "./styles.css";

import OutputPage from "./Pages/Catalog/CatalogSelected";
import CatalogNew from "./Pages/Catalog/CatalogNew";
import Home from "./Pages/Home";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="catalog/:modelNumber" element={<OutputPage />} />
          <Route path="catalog/new" element={<CatalogNew />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
