import { ReactNode, useState } from 'react';
import { Card } from '@components/Card';
import { Sort } from './Sort';
import { SortOption } from '@/types/SortOption';
import { Vehicle } from '@/models/Vehicle.interface';
import { ChangeView } from './ChangeView';

interface CardListProps {
  items: Vehicle[];
}

export const CardList = ({ items }: CardListProps): ReactNode => {
  const [sortOption, setSortOption] = useState<SortOption>('price_asc');
  const [contentView, setContentView] = useState<'tiles' | 'list'>('list');

  const sortFunction = (a: Vehicle, b: Vehicle): number => {
    switch (sortOption) {
      case 'price_asc':
        return a.price - b.price;
      case 'price_desc':
        return b.price - a.price;
      case 'year_desc':
        return b.year - a.year;
      case 'year_asc':
        return a.year - b.year;
      default:
        return a.price - b.price;
    }
  };

  const sortedItems = items.slice().sort(sortFunction);

  return (
    <>
      <div className="w-full my-4 flex gap-8 flex-wrap items-end">
        <Sort setFunction={setSortOption} currentValue={sortOption} />
        <ChangeView contentView={contentView} setContentView={setContentView} />
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        {sortedItems.map(
          ({ id, color, name, model, price, latitude, longitude, year }) => (
            <div key={id} className={contentView === 'tiles' ? 'w-80' : 'w-full'}>
              <Card
                id={id}
                color={color}
                name={name}
                model={model}
                price={price}
                latitude={latitude}
                longitude={longitude}
                year={year}
                view={contentView === 'tiles' ? 'tiles' : 'list'}
              />
            </div>
          )
        )}
      </div>
    </>
  );
};
