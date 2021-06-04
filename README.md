# React Map display

This example shows you how to display a map using:

- Leaflet - a vanilla JS library for displaying maps
- React-Leaflet - a wrapper for Leaflet, so you can use components for displaying maps

Demo: https://leaflet-mappie.vercel.app/

The Leaflet library uses the <b>Openstreetmaps API</b> under the hood. 

So you do not need to make any API calls on your own to display maps & map locations! Isn't that nice?

All you need are "geo location" points: a point on the world map specified by a pair of "latitude" and "longitude" 

Such a geo location you can pass as prop to the "Marker" component of React-Leaflet. 

`<Marker position={position} icon={locationIcon}>`

Et voila! The location will be displayed visually on a map. Checkout the code and try for yourself if you don't believe me, buddy...

React Leaflet - Getting started Guide: https://react-leaflet.js.org/


## How to convert a real address into a Latitude / Longitude geo location??

You can use openstreetmap for this too!

The package "node-open-geocoder" provides you with that service out of the box - it will take over all the calls to openstreetmap under the hood for ya to convert an address into a map point:

`npm i node-open-geocoder`

Usage example:

```
const openGeocoder = require('node-open-geocoder');

const myAddress = '135 pilkington avenue, birmingham'

openGeocoder()
  .geocode( myAddress ) // lookup geo locations for this address
  .end((err, res) => {
    // now in res you will have the result as an array of objects. 
    // Each object has the fields "lat" and "lon"
    // Why an array of geo locations? 
    // Well, sometimes for the same address you may get multiple results. 
    // So the more clear the address is, you may receive an array with just 
    // one geo location object back. Or you simply always pick the first entry from the array. 
    // Now you can feed this geo data into the React-Leaflet marker "position" attribute. 
    // Et voila! The location of your address should get displayed. Enjoy big brothering... 
  })
```

## Tilemaps - Get style to your map

A map is constructed of blocks, the so called "tiles".

Leaflet provides you with different "map styles" for these tiles.

This is how you setup a map using the "tile layer" component and load a style from the web: 

```
<TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
```

The "url" attribute is the URL to the tile / map style. 

You can simply google for different free tile layers (there are plenty) for leaflet to fit your desired map style.

Enjoy!

