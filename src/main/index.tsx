import React from 'react';
import ReactDOM from 'react-dom';

import Login from '@/presentation/pages/Login';
import { BrowserRouter } from 'react-router-dom';
import Routes from '@/presentation/router';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('main')
);
