// tslint:disable:interface-name
//export interface MapWindow extends Window {
//    Microsoft: any;
//    bingAPIReady: () => void; 
//  }
  
 // let window;
  //export let Microsoft;
  
  
  export function loadBingApi(key){
    //const callbackName = "bingAPIReady";
    const callbackName = "GetMap";
    let url = `https://www.bing.com/api/maps/mapcontrol?callback=${callbackName}`;
    if (key) {
      url += `&key=${key}`;
    }
  
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.src = url;
      window.GetMap = () => {
        // Microsoft = window.Microsoft;
        resolve();
      };
      script.onerror = (error) => {
        reject(error);
      };
      document.body.appendChild(script);
    });
  }