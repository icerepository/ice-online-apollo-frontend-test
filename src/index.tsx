import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import AuthGuard from './app/guards/AuthGuard';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthGuard>
        <App />
      </AuthGuard>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
