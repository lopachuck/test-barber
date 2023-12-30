import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import { FLUSH, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants'
import storage from 'redux-persist/lib/storage'
import {menuSlice} from "./menu/menu.slice";

const persistConfig = {
    key: 'uncleve',
    storage,
    whitelist: [],
}
const rootReducer = combineReducers({
    menu: menuSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PERSIST, PURGE, REGISTER],
            },
            // serializableCheck: false,
        }).concat()
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>