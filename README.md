# React Map display

This example shows you how to display a map using:

- Leaflet - a vanilla JS library for displaying maps
- React-Leaflet - a wrapper for Leaflet, so you can use components for displaying maps

The Leaflet library uses the <b>Openstreetmaps API</b> under the hood. 

So you do not need to make any API calls on your own to display maps & map locations! Isn't that nice?

All you need are "geo location" points: a point on the world map specified by a pair of "latitude" and "logitude" 

Such a geo location you can place the "Marker" component on your React-Leaflet map. Et voila! Checkout the code and try for yourself...

## How to convert a real address into a Latitude / Longitude geo location??

You can use openstreetmap for this too!

The package "node-open-geocoder" provides you with that service out of the box - it will take over all the calls to openstreetmap under the hood for ya to convert an address into a map point:

`npm i node-open-geocoder`

```
const openGeocoder = require('node-open-geocoder');

const myAddress = '135 pilkington avenue, birmingham'

openGeocoder()
  .geocode( myAddress ) // lookup geo locations for this address
  .end((err, res) => {
    // now in res you will have the result as an array of objects. Each object has the fields "lat" and "lon"
    // now you can feed this data into the React-Leaflet marker "position" attribute. Et voila! 
  })
```

Enjoy!
