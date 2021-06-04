import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import "leaflet/dist/leaflet.css";

function App() {
  const position = [52.50, 13.30]
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
