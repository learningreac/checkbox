import React, { useState } from "react";
//import { render } from "react-dom";
import BingMap from "./Bingmap";
import pushpindata from './pglist.json';
import PPListText from './PPListTEXT';
import './BingmapAPP.css';
import './style.css';

export default function App() {
  const [ppdata] = useState(pushpindata.resourceSets[0].resources);
  

  const credentials = "AksOASfzdybmndjlOxhWnhZaNtzG5CMgqUFIgB5Ji8W6Gr748WQL5mijk5w4OmDD";
  let center = [47.60357, -122.32945];
  //let allsites = []; // pushpins
  //let map = undefined;

  return (
      <div>
        <BingMap className='bingmap' mapOptions={{ center, credentials }} />
        <p>my pushpinlist</p>
        <PPListText data={ppdata} />
      </div>
  );
}

//render(<App />, document.getElementById("root"));