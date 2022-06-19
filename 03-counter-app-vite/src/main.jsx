import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
/* import { FirstApp } from './FirstApp'; */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstApp title="React 18" subTitle={'Updated Course...'} /> */}
    <CounterApp value={0} />
  </React.StrictMode>
);
