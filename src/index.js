import React from 'react';
import ReactDOM from 'react-dom';

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

import Global from './components/global';
import Views from './views';

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <Views />
  </React.StrictMode>,
  document.getElementById('root')
);