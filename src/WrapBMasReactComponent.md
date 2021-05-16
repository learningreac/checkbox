 ###BingMap with React

#### Loanding Bing Map with normal Js
Using Bing Map API is easy as following:
1.  Reference to the Bing Maps SDK 
            <script type='text/javascript'
               src='http://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=<YOURMAPKEY>'
               async defer>
            </script>
2.   Creat a new map with Microsoft map
            const map = new Microsoft.Maps.Map('#myMap', {
                     credentials: <BMKEY>,
                     //center: new Microsoft.Maps.Location(47.705903, -122.308254)
                  });      
3.    creat a <div> in your HTML <body> to show the map, whose id is one linked with the MAP we created in step 2.
            <div id="myMap" style="position:relative;width:100%;height:100%;"></div>

#### BM as a React component
###### Component tree structure
      <BingmapAPP>
         <Bingmap>
            <BingmapLoader />
         </Bingmap>
      </BingmapAPP>
1. First, dynamically creat js  in the BingmapLoader. 
2. Make the get map call in Bingmap, which need porps from BingmapAPP.
3. As BingmapAPP has the data: center, key, which are need when you creat a new map in Bingmap.

###### useRef + useEffect
- When creating the new map, it will need to be linked to the <div>,as the map will show in this div. 
- Which means when we use JSX creating the map variable, we need access DOM. This is where we need useRef(here is mapRef). 
- Why useEffect but not fetch directly??  (beacuse we need request data from the web)

#### Add pushpin results
###### Plan
Add pushpin text list  => pushpin points show on the map => Add action and interaction for pps between map and text field


#. loading sequence and component lifeCycle.
    Using Bing Map 
   0. ref div DOM
   1.new MS map
   2.JS scipt


# progressive Web apps loading(PWA)
 1. how to load js script dynamically
 2. promise (error handing)
#. useRef + useEffect

