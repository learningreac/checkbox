import React, { useEffect, useState } from "react";
//import { render } from "react-dom";
import BingMap from "./Bingmap";
import pushpindata from './pglist.json';
import PPListText from './PPListTEXT';
import './BingmapAPP.css';
import './style.css';
import {bmapaddpushpins} from './maputil'


/*
* 0 fetch data 
* 1 pan map will add more playgournds
* 2 click pushpin on map will show more information
* 3 click list item will focus on pushpins
*/
export default function App() {
  const [ppdata] = useState(pushpindata.resourceSets[0].resources);
  const [bmap, setMap]= useState(null);

  const credentials = "AksOASfzdybmndjlOxhWnhZaNtzG5CMgqUFIgB5Ji8W6Gr748WQL5mijk5w4OmDD";
  let center = [47.60357, -122.32945];
 
  useEffect(()=>{
    if (null!=bmap) {
      bmapaddpushpins(bmap, ppdata);
    }
  }, [bmap, ppdata]);

  return (
      <div>
        <BingMap className='bingmap' setMap={setMap} mapOptions={{ center, credentials }} />
        <p>my pushpinlist</p>
        <PPListText data={ppdata} />
      </div>
  );
}

//render(<App />, document.getElementById("root"));