import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;

  -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
  box-sizing: border-box;

  font-family: 'Manrope', sans-serif;
  line-height:150%;

  outline:none !important;

  -webkit-tap-highlight-color: transparent;


  &::-webkit-scrollbar {
    width: 9px;
    height: 9px;
    background-color: ${colors.white[100]};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.gray[100]};
    border-radius: 5px;
    border: 1px solid ${colors.white[100]};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.gray[200]};
  }
}

:root{
    --white: ${colors.white[100]};

    --primary1: ${colors.custom.primary1};
    --primary2: ${colors.custom.primary2};
    --primary3: ${colors.custom.primary3};

    --secondary1: ${colors.custom.secondary1};
    --secondary2: ${colors.custom.secondary2};
    --secondary3: ${colors.custom.secondary3};

    --disabled1: ${colors.custom.disabled1};
    --disabled2: ${colors.custom.disabled2};
    --disabled3: ${colors.custom.disabled3};

    --success1: ${colors.custom.success1};
    --success2: ${colors.custom.success2};
    --success3: ${colors.custom.success3};

    --info1: ${colors.custom.info1};
    --info2: ${colors.custom.info2};
    --info3: ${colors.custom.info3};

    --warning1: ${colors.custom.warning1};
    --warning2: ${colors.custom.warning2};
    --warning3: ${colors.custom.warning3};

    --danger1: ${colors.custom.danger1};
    --danger2: ${colors.custom.danger2};
    --danger3: ${colors.custom.danger3};

    /* table */
    --row: ${colors.table.row};
    --rowEven: ${colors.table.rowEven};
    --rowHover: ${colors.table.hover};
    --rowSelected: ${colors.table.selected};


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
