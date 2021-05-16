import React from 'react';

async function requestPPData({ lat, long, Mapkey,allsites, map }) {
    try {
        const response = await fetch(
            `https://dev.virtualearth.net/REST/v1/LocalSearch/?query=playground&userLocation=${lat},${long}&maxResults=20&key=${Mapkey}`
        );
        const mapData = await response.json();
        map.entities.clear();
        const pplist = mapData.resourceSets[0].resources;
        pplist.forEach(element => {

            if (undefined !== element.point) {
                const coordinates = element.point.coordinates;
                const itemtitle = element.name;
                const address = element.Address.addressLine;

                const center = new Microsoft.Maps.Location(coordinates[0], coordinates[1]);

                const pin = new Microsoft.Maps.Pushpin(center, {
                    title: itemtitle,
                    subTitle: address,
                    //text: '1'
                });

                //map.entities.push(pin);
                allsites.push(pin);
            }
        });


    } catch (error) {
        console.error(error);
    }
};
 

export default requestPPData;
