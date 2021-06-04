import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css'; 
import "leaflet/dist/leaflet.css"; // important: loading the map CSS from leaflet

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
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );

}

export default App;
