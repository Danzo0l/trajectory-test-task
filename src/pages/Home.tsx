import { useGetVehiclesQuery } from '@/app/store/api/vehicles.api';
import { CardList } from '@/components/CardList';
import { ReactNode } from 'react';

const Home = (): ReactNode => {
  const { isLoading, isError, data } = useGetVehiclesQuery();

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  console.log(data);

  return (
    <div className="p-2 border-gray-200 dark:border-gray-700">
      <CardList items={data || []} />
    </div>
  );
};

export default Home;
