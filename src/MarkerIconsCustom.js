import L from 'leaflet';
import Icon from "./MarkerIcon.svg";

export const locationIcon = L.icon({
  iconUrl: Icon,
  iconRetinaUrl: Icon,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [45, 45],
});
