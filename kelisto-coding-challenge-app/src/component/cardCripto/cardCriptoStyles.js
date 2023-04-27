import { makeStyles } from '@material-ui/core/styles';

const cardCriptoStyles = makeStyles(
    (theme) => {
      const { typography, palette } = theme;
      const { pxToRem } = typography;
      return {
        root: {
          margin: pxToRem(0),  
          display: 'flex',
          alignItems: 'center',
          paddingLeft: pxToRem(16),         
          paddingRight: pxToRem(16),
        },
        container:{
            display: 'flex',
            alignItems: 'center',
            width:'100%',
            justifyContent: 'space-between',
            marginBottom: pxToRem(30),   
          },
          containerData:{
            display: 'flex',
            alignItems: 'center'
          },
        title:{
            color:palette.typography.primary,
            fontFamily: "Roboto",
            fontWeight: '600',
            fontSize: pxToRem(18),
            lineHeight: pxToRem(21),
        },
        stock:{
          color:palette.typography.primary,
          fontFamily: "Roboto",
          fontWeight: '500',
          fontSize: pxToRem(18),
          lineHeight: pxToRem(21),
      },
        text:{
            color:palette.typography.tertiary,
            fontFamily: "Roboto",
            fontWeight: '400',
            fontSize: pxToRem(18),
            lineHeight: pxToRem(21),
            textAlign: 'right'
        },
        negativeText:{
          color:palette.typography.lightGrey,
          fontFamily: "Roboto",
          fontWeight: '400',
          fontSize: pxToRem(18),
          lineHeight: pxToRem(21),
          textAlign: 'right'
      },
        abbreviation: {
            color:palette.typography.darkGrey,
            fontFamily: "Roboto",
            fontWeight: '500',
            fontSize: pxToRem(18),
            lineHeight: pxToRem(21),
            
        },
        iconCripto: {
            borderRadius: '50%',
            background: palette.icons.cryptoIco,
            width: pxToRem(40),
            height: pxToRem(40),
            marginRight: pxToRem(25)
        }
    }
  })
  
  export default cardCriptoStyles;