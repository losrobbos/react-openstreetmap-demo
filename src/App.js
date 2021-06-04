import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css'; 
import "leaflet/dist/leaflet.css"; // important: loading the map CSS from leaflet
import { locationIcon } from './MarkerIconsCustom'

/** 
 * IMPORTANT: in your CSS, e.g. App.css, you must set a height on the class "leaflet-container"
 * Otherwise the map will not display (blank screen)
 * Enjoy :)
*/ 
function App() {

  const position = [52.50, 13.30] // latitude / longite => easter egg :)
  const zoom = 13

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
        {/* Colored tile layer */}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Greyish retro tile layer */}
        {/* <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        /> */}
        <Marker position={position} icon={locationIcon}>
          <Popup>
            Hey, is this where you live, buddy?<br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );

}

export default App;
