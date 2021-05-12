import React, { useEffect, useRef} from "react";
import { loadBingApi } from "./BingmapLoader";


const BingMap = ({mapOptions}) =>{
    const mapRef = useRef();

    useEffect(()=>{
        loadBingApi(mapOptions.credentials)
        .then(()=>{
            const map = new window.Microsoft.Maps.Map(mapRef.current);
            if (mapOptions) {
                map.setOptions(mapOptions);
              }
        })
        
    }, []);
    
    return (
        <div ref={mapRef} >
        </div>
    );
}

export default  BingMap;
