"use client";

import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import L, { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

const MarkerCluster = ({ markers }: any) => {
  const map = useMap();

  useEffect(() => {
    const markerClusterGroup = L.markerClusterGroup();

    markers.forEach((marker: any) => {
      const leafletMarker = L.marker([marker.latitude, marker.longitude], {
        icon: getIconByCategory(marker.kategori),
      });

      leafletMarker.bindPopup(`
        <div class="flex gap-5">
          <img class="w-12 h-12" src="${getIconByCategory(marker.kategori).options.iconUrl}" alt="${
        marker.nama
      }"/>
          <div>
            <h1 class="font-bold text-lg">${marker.nama}</h1>
            <p class="text-black/50">${marker.provinsi}</p>
          </div>
        </div>
         `);

      leafletMarker.on("click", () => {
        map.flyTo([marker.latitude, marker.longitude], 15, {
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
    case "Makanan":
      iconFile = "makanan.png";
      break;
    case "Wisata":
      iconFile = "wisata.png";
      break;
    default:
      iconFile = "default.png";
  }

  return new Icon({
    iconUrl: `images/${iconFile}`,
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

interface CultureMarker {
  latitude: number;
  longitude: number;
  kategori: string;
  nama: string;
  provinsi: string;
  // Add other properties if needed
}

interface MapProps {
  allCulture: CultureMarker[];
}

const Map = ({ allCulture }: MapProps) => {
  const [selectedMarker, setSelectedMarker] = useState<any>(null);

  return (
    <MapContainer className="rounded-md w-full h-[500px]" center={[-0.7893, 113.9213]} zoom={5}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerCluster markers={allCulture} onMarkerClick={(marker: any) => setSelectedMarker(marker)} />
      <ZoomToMarker position={selectedMarker?.position} />
    </MapContainer>
  );
};

export default Map;
