"use client";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";
import { useEffect } from "react";
import "leaflet-routing-machine";

function RouteMap() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // Points fixes : Paris (départ) et Versailles (arrivée)
    const startPoint = L.latLng(48.8566, 2.3522); // Paris
    const endPoint = L.latLng(48.8049, 2.1204); // Versailles

    // Ajouter le contrôle de routage
    const routingControl = L.Routing.control({
      waypoints: [startPoint, endPoint],
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
      show: true,
      language: "fr",
    }).addTo(map);

    // Nettoyage lors du démontage
    return () => {
      map.removeControl(routingControl);
    };
  }, [map]);

  return null;
}

export default function BiggerMap() {
  return (
    <MapContainer
      center={[48.8566, 2.3522]} // Centré sur Paris
      zoom={10}
      style={{ height: "500px", width: "100%" }}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RouteMap />
    </MapContainer>
  );
}
