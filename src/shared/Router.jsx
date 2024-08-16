import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Dex from "../pages/Dex";
import PockeDetail from "../pages/PockeDetail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/dex" element={<Dex />} />
                <Route path="/pockedetail/:id" element={<PockeDetail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
