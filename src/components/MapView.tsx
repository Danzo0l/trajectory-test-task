import { YMaps, Map, GeoObject } from '@pbe/react-yandex-maps';
import { ReactNode } from 'react';

interface MapViewProps {
  longitude: number;
  latitude: number;
  MarkerText: string;
}

export const MapView = (props: MapViewProps): ReactNode => {
  return (
    <div className="_container">
      <YMaps>
        <Map defaultState={{ center: [props.latitude, props.longitude], zoom: 10 }}>
          <GeoObject
            geometry={{
              type: 'Point',
              coordinates: [props.latitude, props.longitude],
            }}
            options={{
              geodesic: true,
              strokeWidth: 5,
              strokeColor: '#F008',
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};
