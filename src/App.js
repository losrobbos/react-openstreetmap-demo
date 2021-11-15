import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import './App.css'; 
import "leaflet/dist/leaflet.css"; // important: loading the map CSS from leaflet
import { locationIcon } from './MarkerIconsCustom'
import openGeoCoder from 'node-open-geocoder'

/** 
 * IMPORTANT: in your CSS, e.g. App.css, you must set a height on the class "leaflet-container"
 * Otherwise the map will not display (blank screen)
 * Enjoy :)
*/ 
function App() {

  const [position, setPosition] = useState([52.50, 13.30]) // latitude / longite => easter egg :)
  const zoom = 20
  const [address, setAddress] = useState('')
  const [error, setError] = useState('')

  // this custom component will handle all changes of incoming position props of the map
  // once the prop "center" has changed, we will move the parent map to the new location
  function ChangeView({ center, zoom }) {
    const map = useMap(); // access the parent map using the useMap hook
    map.setView(center, zoom);
    return null;
  }

  const changePosition = () => {
    openGeoCoder()
    .geocode( address ) // lookup geo locations for this address
    .end((err, res) => {

      if(err || (res && res.length == 0)) {
        setError("Location not found!")
        return
      }

      const { lat, lon } = res[0]
      // let posNew = [Number(lat).toFixed(2), Number(lon).toFixed(2)]
      let posNew = [lat, lon]
      console.log(position, posNew)
      setPosition(posNew)
      setError("")
    })

  }

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
        <ChangeView center={position} zoom={zoom} /> 


        {/* Colored tile layer - also other tile layers are available - you can google those :)*/}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Location on the map */}
        <Marker position={position} icon={locationIcon}>
          <Popup>
            Hey, is this where you live, buddy?<br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <input placeholder="Enter street address..." onChange={(e) => setAddress(e.target.value) } />
      <button onClick={changePosition} >Go to address</button>
      <div style={{ color: 'red', fontWeight: 'bold' }}>{error}</div>
    </div>
  );

}

export default App;
