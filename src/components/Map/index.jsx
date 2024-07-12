import { useRef } from 'react';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { ZoomControl } from 'react-leaflet/ZoomControl';
import { useMapEvents } from 'react-leaflet/hooks';
import { MapMarker } from '../icons/MapMarker';

const CenteredMarker = () => {
  const map = useMapEvents({
    move: () => {
      const center = map.getCenter();
      console.log('Coordinates: ', center);
    },
  });

  return (
    <div
      id='center-marker'
      className='absolute left-1/2 top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2'
    >
      <MapMarker className='mb-[3px]' />
    </div>
  );
};

const InteractiveMap = () => {
  const mapRef = useRef();

  return (
    <div id='map' ref={mapRef}>
      <MapContainer
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={13}
        className='relative h-full w-full'
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <ZoomControl position='topright' />
        <CenteredMarker />
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
