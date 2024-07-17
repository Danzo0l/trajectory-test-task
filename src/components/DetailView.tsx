import { Vehicle } from '@/models/Vehicle.interface';
import { ReactNode } from 'react';
import { MapView } from './MapView';

export const DetailView = (props: Vehicle): ReactNode => {
  return (
    <div className="max-w-lg">
      <a href="#">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name + ' ' + props.model}
        </h1>
      </a>
      <p className="mb-3 text-2xl font-light text-gray-700 dark:text-gray-400">
        <strong className="text-black dark:text-white font-normal">Год выпуска:</strong>{' '}
        {props.year}
      </p>
      <p className="mb-3 text-2xl font-light text-gray-700 dark:text-gray-400">
        <strong className="text-black dark:text-white font-normal">Цвет:</strong>{' '}
        {props.color}
      </p>
      <p className="mb-3 text-2xl font-light text-gray-700 dark:text-gray-400">
        <strong className="text-black dark:text-white font-normal">Цена:</strong>{' '}
        {props.price}
      </p>
      <p className="mb-3 text-2xl font-light text-gray-700 dark:text-gray-400">
        <strong className="text-black dark:text-white font-normal">
          Местоположение:
        </strong>{' '}
        {props.latitude}, {props.longitude}
      </p>

      <div className="w-fit overflow-hidden  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <MapView
          longitude={props.longitude}
          latitude={props.latitude}
          MarkerText={props.name + ' ' + props.model}
        />
      </div>
    </div>
  );
};
