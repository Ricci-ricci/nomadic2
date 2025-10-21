"use client";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";
import { useEffect } from "react";
import "leaflet-routing-machine";

// Icônes personnalisées
const startIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const endIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const defaultIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Fonction pour créer les marqueurs du routage
const createMarker = (i, waypoint) => {
  return L.marker(waypoint.latLng, {
    icon: i === 0 ? startIcon : endIcon,
  });
};

// 🔹 Composant pour le routage entre start et end
export function RouteMap({ start, end }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const startPoints = L.latLng(start);
    const endPoints = L.latLng(end);

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

    return () => {
      map.removeControl(routingControl);
    };
  }, [map, start, end]);

  return null;
}

// 🔹 Composant pour afficher plusieurs marqueurs
function MultipleMarkers({ locations }) {
  return (
    <>
      {locations.map((loc, index) => (
        <Marker key={index} position={loc.position} icon={defaultIcon}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </>
  );
}

// 🔹 Composant principal
export default function Map({ start, end }) {
  // Exemple de plusieurs lieux à marquer
  const places = [
    { name: "Musée National", position: [-18.8792, 47.5079] },
    { name: "Université d’Antananarivo", position: [-18.905, 47.525] },
    { name: "Lac Anosy", position: [-18.92, 47.516] },
  ];

  return (
    <div className="z-0">
      <MapContainer center={start} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Route entre start et end */}
        <RouteMap start={start} end={end} />

        {/* Plusieurs marqueurs */}
        <MultipleMarkers locations={places} />
      </MapContainer>
    </div>
  );
}
