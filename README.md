# React Map display

This example shows you how to display a map using:

- Leaflet - a vanilla JS library for displaying maps
- React-Leaflet - a wrapper for Leaflet, so you can use components for displaying maps

Demo: https://leaflet-mappie.vercel.app/

The Leaflet library uses the <b>Openstreetmaps API</b> under the hood. 

So you do not need to make any API calls on your own to display maps & map locations! Isn't that nice?

All you need are "geo location" points: a point on the world map specified by a pair of "latitude" and "longitude" 

Such a geo location you can pass as prop to the "Marker" component of React-Leaflet. Et voila! The location will be displayed visually on a map. Checkout the code and try for yourself if you don't believe me, buddy...

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
    // now in res you will have the result as an array of objects. Each object has the fields "lat" and "lon"
    // why an array? well, sometimes for the same address you may get multiple results. 
    // so the more clear the address is, you may just receive one geo location object back. But always inside an array
    // now you can feed this data into the React-Leaflet marker "position" attribute. Et voila! 
  })
```

Enjoy!
