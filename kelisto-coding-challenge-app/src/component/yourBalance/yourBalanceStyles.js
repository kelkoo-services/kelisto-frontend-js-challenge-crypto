import { makeStyles } from '@material-ui/core/styles';

const yourBalanceStyles = makeStyles(
  (theme) => {
    const { typography, palette } = theme;
    const { pxToRem } = typography;
    return {
        root: {
            color: palette.typography.white,
            padding: pxToRem(0),
            margin: pxToRem(0),
            height: pxToRem(124),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'default'
            
        },
        title:{
            color:palette.typography.grey,
            fontFamily: "Roboto",
            fontWeight: '400',
            fontSize: pxToRem(16),
            lineHeight: pxToRem(19),
            letterSpacing: pxToRem(2),
            marginTop: pxToRem(16),
        },
        mount:{
            color:palette.typography.white,
            fontFamily: "Roboto",
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: pxToRem(36),
            lineHeight: pxToRem(42),
            marginTop: pxToRem(8),
        }
    }
})

export default yourBalanceStyles;