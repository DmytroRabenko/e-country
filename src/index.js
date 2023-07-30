import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';//for redux working
import { PersistGate } from 'redux-persist/integration/react';////for redux-persist working
import store, {persistor} from './store';
import App from './components/app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);

