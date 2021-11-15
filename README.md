# React Map display

This example shows you how to display a map using:

- Leaflet - a vanilla JS library for displaying maps
- React-Leaflet - a wrapper for Leaflet, so you can use components for displaying maps

Demo: https://leaflet-mappie.vercel.app/

The Leaflet library uses the <b>Openstreetmaps API</b> under the hood. 

So you do not need to make any API calls on your own to display maps & map locations! Isn't that nice?

All you need are "geo location" points: a point on the world map specified by a pair of "latitude" and "longitude" 

Such a geo location you can pass as prop to the "Marker" component of React-Leaflet. 

```
const position = [52.50, 13.30] // array with latitude & longitude

<Marker position={position} icon={locationIcon}>
```

Et voila! The location will be displayed visually on a map. 

Clone the full code of this repo and try for yourself if you don't believe me, buddy...

React Leaflet - Getting started Guide: https://react-leaflet.js.org/

## Leaflet bug

Since major version 3 there is a bug in the React Leaflet core library which gives you an "Unexpected token" error on startup. The last working version actually seems to be 2.7 (!).

We could downgrade to version 2.7, but then all code samples in the React Leaflet documentation would not work anymore.

So the most straight forward fix is to NOT install react leaflet using "npm i react-leaflet".

Instead put these lines into you package.json dependencies and run `npm i` afterwards:

```
"react-leaflet": ">=3.1.0 <3.2.0 || ^3.2.1",
"@react-leaflet/core": ">=1.0.0 <1.1.0 || ^1.1.1",
```

Now your React app should startup successfully.


## Switching map location programmatically

The map position can only be set initially by setting "center" prop of the MapContainer component.

Even if you manage the value of "center" prop in state, changes of the state will NOT trigger a re-placement of the map.

Find here a way how you can move the map position using a tiny sub component:

https://stackoverflow.com/questions/64665827/react-leaflet-center-attribute-does-not-change-when-the-center-state-changes


## Convert address into geo location?

Let's say you have an address like 'Turmstraße 53, 10551 Berlin, Germany'. And now you wanna find the geolocation (Latitude & Longitude) for that address to display it on your freakin' map!

You can use the Openstreetmap API for this too. 

The package "node-open-geocoder" provides you with that conversion service out of the box. It will take over all the calls to openstreetmap under the hood for ya to convert an address into a geo location map point:

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

Et voilá: Now you can place addresses of venues or people on a map.


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

