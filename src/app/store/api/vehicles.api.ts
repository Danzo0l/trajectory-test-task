import { Vehicle } from '@/models/Vehicle.interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const vehiclesApi = createApi({
  reducerPath: 'vehiclesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://test.tspb.su/test-task/',
  }),
  endpoints: (builder) => ({
    getVehicles: builder.query<Vehicle[], void>({
      query: () => 'vehicles',
    }),
  }),
});

export const { useGetVehiclesQuery } = vehiclesApi;

export type SetupApi = typeof vehiclesApi;
export type UseGetVehiclesQueryHook = ReturnType<
  SetupApi['endpoints']['getVehicles']['useQuery']
>;
