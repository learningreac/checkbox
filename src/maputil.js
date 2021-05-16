
export const bmapaddpushpins = (map, pushpins) => {

    pushpins.forEach(element => {

        if (undefined !== element.point) {
            const coordinates = element.point.coordinates;
            const itemtitle = element.name;
            const address = element.Address.addressLine;

            const center = new window.Microsoft.Maps.Location(coordinates[0], coordinates[1]);

            const pin = new window.Microsoft.Maps.Pushpin(center, {
                title: itemtitle,
                subTitle: address,
            });

            map.entities.push(pin);
           // allsites.push(pin);
        }
    });
};




