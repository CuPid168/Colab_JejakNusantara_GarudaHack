"use client";

import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import L, { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

const markers = [
  {
    id: 1,
    name: "China Town",
    position: [-6.3111628, 106.6750714],
    category: "Budaya",
  },
  {
    id: 2,
    name: "Ketoprak",
    position: [-6.7817566, 108.5550513],
    category: "Makanan Daerah",
  },
  {
    id: 3,
    name: "Wayang Kulit",
    position: [-7.797068, 110.370529],
    category: "Budaya",
  },
  {
    id: 4,
    name: "Angklung",
    position: [-6.914744, 107.60981],
    category: "Alat Musik",
  },
  {
    id: 5,
    name: "Batik",
    position: [-7.250445, 112.768845],
    category: "Budaya",
  },
  {
    id: 6,
    name: "Gamelan",
    position: [-8.409518, 115.188919],
    category: "Makanan Daerah",
  },
];

const MarkerCluster = ({ markers }: any) => {
  const map = useMap();

  useEffect(() => {
    const markerClusterGroup = L.markerClusterGroup();

    markers.forEach((marker: any) => {
      const leafletMarker = L.marker(marker.position, {
        icon: getIconByCategory(marker.category),
      });

      leafletMarker.bindPopup(`<b>${marker.name}</b><br/>${marker.category}`);

      leafletMarker.on("click", () => {
        map.flyTo(marker.position, 10, {
          duration: 1.2,
        });

        setTimeout(() => {
          leafletMarker.openPopup();
        }, 400);
      });

      markerClusterGroup.addLayer(leafletMarker);
    });

    map.addLayer(markerClusterGroup);

    return () => {
      map.removeLayer(markerClusterGroup);
    };
  }, [map, markers]);

  return null;
};

const getIconByCategory = (category: string) => {
  let iconFile = "default-marker.png";

  switch (category) {
    case "Budaya":
      iconFile = "budaya.png";
      break;
    case "Alat Musik":
      iconFile = "alat-musik.png";
      break;
    case "Makanan Daerah":
      iconFile = "makanan-daerah.png";
      break;
    case "Tempat Wisata":
      iconFile = "tempat-wisata.png";
      break;
    default:
      iconFile = "default.png";
  }

  return new Icon({
    iconUrl: `/images/${iconFile}`,
    iconSize: [38, 38],
  });
};

const ZoomToMarker = ({ position }: { position?: [number, number] }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 10, {
        duration: 1.5,
      });
    }
  }, [position, map]);

  return null;
};

const Map = () => {
  const [selectedMarker, setSelectedMarker] = useState<any>(null);

  return (
    <MapContainer className="rounded-md w-full h-[500px]" center={[-0.7893, 113.9213]} zoom={5}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerCluster markers={markers} onMarkerClick={(marker: any) => setSelectedMarker(marker)} />
      <ZoomToMarker position={selectedMarker?.position} />
    </MapContainer>
  );
};

export default Map;
