import { Route, Routes } from "react-router-dom";
import { PublicRouter } from "./PublicRouter";
import {  PrivateRouter } from "./PrivateRouter"
import { LoginPage } from "../auth";
import { ToritosAppRouter } from "../products/router/ToritosAppRouter";

export const AppRouter = () => {
  return (
    <>
     
      <Routes>
        <Route path="/login" element={ <PublicRouter><LoginPage /></PublicRouter> }/>
        <Route path="/*" element={ <PrivateRouter><ToritosAppRouter/></PrivateRouter> }/>
      </Routes>
    </>
  );
};
