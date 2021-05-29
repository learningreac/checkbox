import React from "react";
import { Outlet} from "react-router-dom";
import { RoutesHome} from './pages'
/*import {
    Home,
    About,
    Events,
    Products,
    Contact
} from "./pages";*/

export default function RouterApp() {
   return (
        <div>
            <RoutesHome  />
            <Outlet />
        </div>)
/*             <Routes>
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
*/
}
