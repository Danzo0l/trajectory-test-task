import { AppDispatch } from '@/app/store';
import { vehiclesApi } from '@/app/store/api/vehicles.api';
import { Vehicle } from '@/models/Vehicle.interface';
import { Draft } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export interface CardProps extends Vehicle {
  view: 'tiles' | 'list';
}

export const Card = (props: CardProps): ReactNode => {
  const styleForCard = props.view == 'tiles' ? ' flex-col gap-4' : ' flex-row';

  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteVehicleLocally = (id: number) => {
    dispatch(
      vehiclesApi.util.updateQueryData(
        'getVehicles',
        undefined,
        (draft: Draft<Vehicle[]>) => {
          const index = draft.findIndex((vehicle) => vehicle.id === id);
          if (index !== -1) draft.splice(index, 1);
        }
      )
    );
  };

  return (
    <div className="block p-2 border border-gray-200 rounded-lg shadow dark:border-gray-700 h-full w-full">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Link to={'/detail/' + props.id}>{props.name + ' ' + props.model}</Link>
        <span className="text-gray-500"> ({props.year})</span>
      </h5>
      <div className={'flex gap-4' + styleForCard}>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Цвет: {props.color}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Цена: {props.price}
        </p>
        <Link
          className="text-blue-500 hover:opacity-80 active:opacity-50 w-fit"
          to={'/detail/' + props.id}
        >
          На карте
        </Link>
        <Link
          className="text-yellow-600 hover:opacity-80 active:opacity-50 w-fit"
          to={'/edit/' + props.id}
        >
          Редактировать
        </Link>
        <button
          className="text-red-600 hover:opacity-80 active:opacity-50 w-fit"
          onClick={() => handleDeleteVehicleLocally(props.id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};
