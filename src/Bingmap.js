import React, { useEffect, useRef} from "react";
import { loadBingApi } from "./BingmapLoader";


const BingMap = ({mapOptions, setMap}) =>{
    const mapRef = useRef();

    useEffect(()=>{
        loadBingApi(mapOptions.credentials)
        .then(()=>{
            console.log('load ms map');
            const map = new window.Microsoft.Maps.Map(mapRef.current);
            if (mapOptions) {
                map.setOptions(mapOptions);
            }

            setMap(map);
 
            console.log('done load ms map');
        })
        
    }, []);

    const mapstyle = {
        width: '500px',
        height: '500px'
    };
    
    return (
        <div style={mapstyle} id="mybmap" ref={mapRef} >
        </div>
    );
}

export default BingMap;


