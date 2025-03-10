export const mapView = {
  latitude: -32.73553067437731,
  longitude: 151.56378625937418,
  zoom: 11.799302742731877,
  pitch: 0,
  bearing: 0,
};

export type MapView = typeof mapView;

export const setMapView = (set: (state: { mapView: MapView }) => void) => {
  return (mapView: MapView) => {
    set({ mapView });
  };
};
