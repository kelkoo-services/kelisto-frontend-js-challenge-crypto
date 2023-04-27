import { createTheme } from '@material-ui/core/styles';
const theme = createTheme({

  palette: {
    common: {
        main: '#000259',
        white: '#FFFFFF'
    },
    icons: {
        active: '#000259',
        inactive: '#FFFFFF',
        border: '#999ABD',
        cryptoIco:'#C4C4C4'
    },
    button:{
        grey: '#999ABD',
        border : '#000259',
        primary: '#000259'
    },
    typography:{
        primary: '#000000',
        secondary: '#82838B',
        tertiary: '#A60067',
        lightGrey: '#00C49A',
        grey: '#999ABD',
        darkGrey: '#82838B',
        white: '#FFFFFF'

    }
  }
});
  export default theme;