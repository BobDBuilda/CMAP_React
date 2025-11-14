import { createContext, useContext, useState, type ReactNode } from "react";

interface IMapContext {
    markers: {
      name: string;
      lat: number;
      lng: number;
    }[];
    addMarker: (marker: {
      name: string;
      lat: number;
      lng: number;
    }) => void;
    removeMarker: (name: string) => void;
}

const MapContext = createContext<IMapContext | undefined>(undefined);

const useMapContext = () => {
  return useContext(MapContext);
}

// The provider component must accept 'children' to wrap other components.
const MapProvider = ({ children }: { children: ReactNode }) => {
  // 1. State is created here to hold the markers.
  const [markers, setMarkers] = useState<IMapContext['markers']>([]);

  // 2. Functions are defined to modify the state.
  const addMarker = (marker: { name: string; lat: number; lng: number; }) => {
    setMarkers((prevMarkers) => [...prevMarkers, marker]);
  };

  const removeMarker = (name: string) => {
    setMarkers((prevMarkers) => prevMarkers.filter((marker) => marker.name !== name));
  };

  // 3. The state and functions are bundled into a 'value' object.
  const value = {
    markers,
    addMarker,
    removeMarker,
    useMapContext
  };

  // 4. The Provider component is returned, passing the value to all its children.
  return (
    <MapContext.Provider value={value}>
      {children}
    </MapContext.Provider>
  );
};

const MapProviderExports = {
  useMapContext,
  MapProvider
}

export default MapProviderExports;