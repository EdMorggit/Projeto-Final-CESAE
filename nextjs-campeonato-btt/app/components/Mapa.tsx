"use client"; // Next.js exige isso para usar Leaflet no cliente

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Mapa() {
  const locais = [
    { nome: "Cascais", coords: [38.6979, -9.4214] },
    { nome: "Porto", coords: [41.1579, -8.6291] },
    { nome: "Algarve", coords: [37.0177, -7.9304] },
  ];

  return (
    <MapContainer center={[39.5, -8]} zoom={6} className="h-72 w-full rounded shadow-md">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locais.map((local, index) => (
        <Marker key={index} position={local.coords}>
          <Popup>{local.nome}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
