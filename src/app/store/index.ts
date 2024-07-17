import { configureStore } from '@reduxjs/toolkit';
import { vehiclesApi } from './api/vehicles.api';

export const store = configureStore({
  reducer: {
    [vehiclesApi.reducerPath]: vehiclesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vehiclesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
