import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import storeAndPersistor from '../Store/Store';
import { PersistGate } from 'redux-persist/integration/react'

const {store, persistor} = storeAndPersistor;

function MyApp({ Component, pageProps }) {
  return ( 
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
