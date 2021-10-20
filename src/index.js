import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import 'inter-ui/inter.css';

import Global from './components/global';
import Views from './views';

const theme = {
  backgroundMain: '#161819',
  backgroundSecond: '#181a1c',
  backgroundInput: '#27292d',
  backgroundButton: '#27292d',
  colorTitle: '#d5d5d5',
  colorText: '#d1d4d3',
  colorPlaceholder: '#585a5e'
};

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <ThemeProvider theme={theme}>
      <Views />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);