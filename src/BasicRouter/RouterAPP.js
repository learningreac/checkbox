import React from "react";
import { Routes, Route } from "react-router-dom";
import {
    Home,
    About,
    Events,
    Products,
    Contact
} from "./pages";

export default function RouterApp() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/events"
                    element={<Events />}
                />
                <Route
                    path="/products"
                    element={<Products />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
            </Routes>
        </div>
    );
}
