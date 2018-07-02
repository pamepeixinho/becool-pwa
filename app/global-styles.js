import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Nunito', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Nunito', Helvetica, Arial, sans-serif;
  }

  #app {
    background: linear-gradient(180deg, #5E0D62 0%, #281029 100%) no-repeat;
    color: white !important;
    min-height: 100%;
    min-width: 100%;
  }

  input {
    color: white !important;
  }

  p,
  label {
    font-family: 'Nunito', Helvetica, Arial, sans-serif;
    line-height: 1.5em;
  }
`;
