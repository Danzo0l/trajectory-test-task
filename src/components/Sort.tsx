import { SortOption } from '@/types/SortOption';
import { ReactNode } from 'react';

interface SortProps {
  currentValue: SortOption;
  setFunction: (sortBy: SortOption) => void;
}

export const Sort = ({ setFunction, currentValue }: SortProps): ReactNode => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === 'price_asc') {
      setFunction('price_asc');
    }
    if (event.target.value === 'price_desc') {
      setFunction('price_desc');
    }
    if (event.target.value === 'year_asc') {
      setFunction('year_asc');
    }
    if (event.target.value === 'year_desc') {
      setFunction('year_desc');
    }
  };

  return (
    <div>
      <label
        htmlFor="sortOption"
        className="block mb-1 text-sm font-ligth text-gray-900 dark:text-white"
      >
        Сортировать по
      </label>

      <select
        id="sortOption"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={currentValue}
        onChange={handleChange}
      >
        <option value="price_asc">Цена: по возростанию</option>
        <option value="price_desc">Цена: по убыванию</option>
        <option value="year_desc">Год: новее</option>
        <option value="year_asc">Год: старше</option>
      </select>
    </div>
  );
};
