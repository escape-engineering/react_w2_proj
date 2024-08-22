import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Dex from "../pages/Dex";
import PokeDetail from "../pages/PockeDetail";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "../pages/NotFound";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/dex" element={<Dex />} />
                <Route path="/pokedetail" element={<PokeDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />
        </BrowserRouter>
    );
};

export default Router;
