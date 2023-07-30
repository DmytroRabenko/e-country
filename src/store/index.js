import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { persistStore, 
        persistReducer,
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
        } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import storeReducer from "./storeSlice";

const rootReducer = combineReducers({
    store: storeReducer
});

const persistConfig = {
    key: 'root',
    storage: storage,
  }

const persisterReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persisterReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
    
})

export const persistor = persistStore(store);

export default store;