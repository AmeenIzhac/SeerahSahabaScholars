import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYm9yaW5nYmxvYmtpbmciLCJhIjoiY2xoZzJ0b3RhMDBicjNncDNyaDR6Y3BobSJ9.uVtmNGP1XlpZInd6HI2siQ";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: [-74.5, 40],
  zoom: 9,
});

export default function Home() {
  return <div id="map" />;
}
