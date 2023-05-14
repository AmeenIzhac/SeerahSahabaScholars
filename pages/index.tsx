import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";
import styles from "../styles/index.module.scss";

export default function Home() {
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | any>(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYm9yaW5nYmxvYmtpbmciLCJhIjoiY2xoZzJ0b3RhMDBicjNncDNyaDR6Y3BobSJ9.uVtmNGP1XlpZInd6HI2siQ";

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-1.46389, 53.296543],
      zoom: 13,
    });
  }, []);

  return (
    <div id="map">
      <div className={styles.style1} ref={mapContainer} />
    </div>
  );
}
