import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;

  -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
  box-sizing: border-box;

  font-family: 'Montserrat', sans-serif;
  line-height:150%;

  outline:none !important;

  -webkit-tap-highlight-color: transparent;


  &::-webkit-scrollbar {
    width: 9px;
    height: 9px;
    background-color: ${colors.gray[100]};
  }

  &::-webkit-scrollbar-thumb {
    background-color: #FF914D;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.gray[200]};
  }
}


h1,h2,h3,h4,h5,h6,b{
  font-family: 'Manrope', sans-serif;
  font-weight: bold;
}

a, button {
  -webkit-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  user-select: none;

  font-family: 'Manrope', sans-serif;
}

button{
  border: 0;
  cursor: pointer;
  background: transparent;
}

body {
  background: ${colors.white[200]};
  color: ${colors.black[100]};
  overflow: overlay;
  scroll-behavior: smooth;
}

`;
