import { Routes, Route } from "react-router-dom";

import "./styles.css";
import "animate.css";
import OutputPage from "./Pages/Catalog/CatalogSelected";
import CatalogNew from "./Pages/Catalog/CatalogNew";
import Home from "./Pages/Home/Home";
import NavBar from "./NavBar";
import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function App() {
  return (
    <div className="App">
      <Fab
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          height: 75,
          width: 75,
        }}
        className="wpFab"
        href="https://wa.me/994514556655"
      >
        <WhatsAppIcon fontSize="large" sx={{ color: "white" }} />
      </Fab>
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
