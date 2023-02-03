import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/AppBar/Home";
import Navbar from "../components/AppBar/Navbar";

const Routers = () => {
    const RoutesScreen = {};
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;