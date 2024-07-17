import { AppDispatch } from '@/app/store';
import { vehiclesApi } from '@/app/store/api/vehicles.api';
import { Vehicle } from '@/models/Vehicle.interface';
import { Draft } from '@reduxjs/toolkit';
import { ReactNode, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export interface CardProps extends Vehicle {}

export const EditCard = (props: CardProps): ReactNode => {
  const [name, setName] = useState(props.name);
  const [model, setModel] = useState(props.model);
  const [year, setYear] = useState(props.year);
  const [color, setColor] = useState(props.color);
  const [price, setPrice] = useState(props.price);
  const [latitude] = useState(props.latitude);
  const [longitude] = useState(props.longitude);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleUpdateVehicleLocally = (id: number, updatedData: Vehicle) => {
    dispatch(
      vehiclesApi.util.updateQueryData(
        'getVehicles',
        undefined,
        (draft: Draft<Vehicle[]>) => {
          const index = draft.findIndex((vehicle) => vehicle.id === id);
          if (index !== -1) {
            draft[index] = updatedData;
          }
        }
      )
    );
  };

  const handleSaveChanges = () => {
    const updatedVehicle: Vehicle = {
      ...props,
      name,
      model,
      year,
      color,
      price,
      latitude,
      longitude,
    };

    handleUpdateVehicleLocally(props.id, updatedVehicle);
    navigate('/');
  };

  return (
    <div className="max-w-lg">
      <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        Редактировать
      </h1>
      <div>
        <label
          htmlFor="inputName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Марка
        </label>
        <input
          type="text"
          id="inputName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="inputModel"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Модель
        </label>
        <input
          type="text"
          id="inputModel"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="inputYear"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Год
        </label>
        <input
          type="number"
          id="inputYear"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="inputPrice"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Цена
        </label>
        <input
          type="number"
          id="inputPrice"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="inputColor"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Цвет
        </label>
        <input
          type="text"
          id="inputColor"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <button
        className="text-green-500 hover:opacity-80 active:opacity-50 w-fit py-4"
        onClick={handleSaveChanges}
      >
        Сохранить
      </button>
    </div>
  );
};
