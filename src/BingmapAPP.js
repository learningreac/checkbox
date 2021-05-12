import React from "react";
//import { render } from "react-dom";
import BingMap from "./Bingmap";
// import "./style.css";


export default function App() {
  return (
    <BingMap
      mapOptions={{
        center: [47.60357, -122.32945],
        credentials:
          "AksOASfzdybmndjlOxhWnhZaNtzG5CMgqUFIgB5Ji8W6Gr748WQL5mijk5w4OmDD"
}}
    />
  );
}

//render(<App />, document.getElementById("root"));