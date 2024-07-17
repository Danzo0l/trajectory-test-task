import { Vehicle } from '@/models/Vehicle.interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const vehiclesApi = createApi({
  reducerPath: 'setup/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://test.tspb.su/test-task/',
  }),
  endpoints: (build) => ({
    getVehicles: build.query<Vehicle[], void>({
      query: () => ({
        url: 'vehicles',
      }),
    }),
  }),
});

export const { useGetVehiclesQuery } = vehiclesApi;

export type SetupApi = typeof vehiclesApi;
export type UseGetVehiclesQueryHook = ReturnType<
  SetupApi['endpoints']['getVehicles']['useQuery']
>;
