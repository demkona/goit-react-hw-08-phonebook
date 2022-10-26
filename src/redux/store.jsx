import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'service/api';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware],
});

