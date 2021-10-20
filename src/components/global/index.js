import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    display: flex;
  }

  body {
    flex: 1;
    display: flex;
  }

  #root {
    flex: 1;
    display: flex;
  }
`;