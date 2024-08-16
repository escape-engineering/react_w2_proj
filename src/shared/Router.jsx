import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Dex from "../pages/Dex";
import PocketDetail from "../pages/PocketDetail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/dex" element={<Dex />} />
                <Route path="/pocketdetail/:id" element={<PocketDetail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
