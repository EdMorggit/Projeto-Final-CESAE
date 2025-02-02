"use client"; // Next.js exige isso para usar Leaflet no cliente

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Importa Leaflet para definir ícone personalizado

// Criando o ícone personalizado da bicicleta
const bikeIcon = new L.Icon({
  iconUrl: "/iconebike.jpg", // Caminho do arquivo dentro de "public/"
  iconSize: [32, 32], // Define o tamanho do ícone
  iconAnchor: [16, 32], // Ajusta a ancoragem do ícone no mapa
  popupAnchor: [0, -32], // Ajusta a posição do popup
});

export default function Mapa() {
  const locais = [
    {
      nome: "Grande Travessia Montanhas Mágicas (BTT)",
      descricao: "Serras do Montemuro, Arada e Gralheira",
      coords: [40.915, -8.161], // Coordenadas ajustadas
    },
    {
      nome: "Rota do Corredor de Mouros",
      descricao: "Serra da Estrela",
      coords: [40.321, -7.612], // Coordenadas ajustadas
    },
    {
      nome: "Planalto do Escarpão e Ribeira de Quarteira",
      descricao: "Prova realizada no sul de Portugal",
      coords: [37.126, -8.228], // Coordenadas ajustadas
    },
    {
      nome: "Maratona BTT de Albufeira",
      descricao: "Prova emocionante no litoral sul de Portugal",
      coords: [37.0882, -8.2503], // Coordenadas de Albufeira
    },
    {
      nome: "Desafio BTT Sortelha",
      descricao: "Uma das trilhas mais desafiadoras em Portugal",
      coords: [40.3482, -7.1775], // Coordenadas de Sortelha
    },
  ];

  return (
    <MapContainer center={[39.5, -8]} zoom={6} className="h-72 w-full rounded shadow-md">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {locais.map((local, index) => (
        <Marker key={index} position={local.coords} icon={bikeIcon}>
          <Popup>
            <strong>{local.nome}</strong>
            <br />
            {local.descricao}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

