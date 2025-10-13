"use client";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";
import { useEffect } from "react";
import "leaflet-routing-machine";
const startIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png", // Icône verte pour départ
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const endIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png", // Icône rouge pour arrivée
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Fonction pour créer des marqueurs personnalisés
let waypointIndex = 0;
const createMarker = (i, waypoint) => {
  const marker = L.marker(waypoint.latLng, {
    icon: i === 0 ? startIcon : endIcon, // Vert pour le premier (départ), rouge pour le second (arrivée)
  });
  waypointIndex++;
  return marker;
};
export function RouteMap({ start, end }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const startPoints = L.latLng(start);
    const endPoints = L.latLng(end);

    // Ajouter le contrôle de routage
    const routingControl = L.Routing.control({
      waypoints: [startPoints, endPoints],
      router: L.Routing.osrmv1({
        serviceUrl: "https://router.project-osrm.org/route/v1",
      }),
      lineOptions: {
        styles: [{ color: "#0078ff", weight: 4 }],
      },
      routeWhileDragging: false,
      showAlternatives: false,
      addWaypoints: false,
      fitSelectedRoutes: true,
      show: false,
      language: "fr",
      createMarker: createMarker,
    }).addTo(map);

    // Nettoyage lors du démontage
    return () => {
      map.removeControl(routingControl);
    };
  }, [map]);

  return null;
}

export default function Map({ start, end }) {
  return (
    <div className="z-0">
      <MapContainer center={start} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RouteMap start={start} end={end}></RouteMap>
      </MapContainer>
    </div>
  );
}
