import {  Route, Routes } from "react-router-dom";
import { NavBar } from "../../ui/components/NavBar";
import { HomePage } from "../pages/HomePage";
import { InventaryPage } from "../pages/InventaryPage";
import { SalePage } from "../pages/SalePage";
import { ReportPage } from "../pages/ReportPage";

export const ToritosAppRouter = () => {
  return (
    <>
    <NavBar/>

      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/inventary" element={<InventaryPage/>} />
        <Route path="/sale" element={<SalePage/>} />
        <Route path="/report" element={<ReportPage/>} />



      </Routes>
    </>
  );
};
