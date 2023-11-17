import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/contacts.reducer';
import { filterReducer } from './filter/filter.reducer';

const contactsConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
  //   blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    contactsStore: persistReducer(contactsConfig, contactsReducer),
    filterStore: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
