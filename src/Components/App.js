import { Routes, Route } from "react-router-dom";

import "./styles.css";

import OutputPage from "./Pages/Catalog/CatalogSelected";
import CatalogNew from "./Pages/Catalog/CatalogNew";
import Home from "./Pages/Home";
import NavBar from "./NavBar";
import Spinner from "./Spinner"
import { useSelector } from "react-redux";
import {  useDispatch } from "react-redux";
import {SetIsLoading} from "./redux/group";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  var status = useSelector((state) => state.group.isLoading);
  useEffect(()=>{
    setTimeout(()=>{
      dispatch(SetIsLoading(false))
    },2000)
  })
  
  return (
    <div className="App">
    {status && <Spinner/>}
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
