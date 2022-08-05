import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { PokemonApp } from './PokemonApp';
import { store } from './store';
import { Provider } from 'react-redux';
import './styles.css';
import { TodoApp } from './TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
