import rootReducer from "./Reducers/Reducers";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use
}
const persistedReducer = persistReducer(persistConfig, rootReducer) // create a persisted reducer

const store = createStore(persistedReducer, applyMiddleware(thunk));

const  persistor = persistStore(store);

const storeAndPersistor = {store, persistor}

export default storeAndPersistor;