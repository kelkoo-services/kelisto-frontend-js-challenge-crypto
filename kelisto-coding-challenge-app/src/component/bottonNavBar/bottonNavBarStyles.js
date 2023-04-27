import { lighten, makeStyles } from '@material-ui/core/styles';

const bottonBarStyles = makeStyles(
  (theme) => {
    const { typography, palette } = theme;
    const { pxToRem } = typography;
    return {
        root: {
            padding: pxToRem(16),
            background: palette.common.white,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        contentIcon: {
            width: pxToRem(64),
            height: pxToRem(64),
            border: `${pxToRem(1)} solid ${palette.button.border}`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'all 150ms ease',
            '&:hover': {
                fontSize: pxToRem(18),
                backgroundColor: lighten(palette.common.main, 0.7)
            },
            '&:active': {   
                borderRadius: '50%'
            }   
        },
        contentIconActive: {
            width: pxToRem(64),
            height:  pxToRem(64),
            display: 'flex',
            background: palette.common.main,
            color: palette.common.white,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            cursor: 'auto',
            transition: 'all 150ms ease',
            '&:active': {
                fontSize: pxToRem(18),
                backgroundColor: lighten(palette.common.main, 0.4),
              
            }   
        },
        ico:{
            width: pxToRem(22),
            height:  pxToRem(22),
        },
        icoActive:{
            width: pxToRem(22),
            height:  pxToRem(22),
            filter: 'invert(100%)'
        },
        typographyName:{
            fontSize: pxToRem(16),
            fontWeight: '400',
            lineHeight: pxToRem(19),
            letterSpacing: 0,
            textAlign: 'left',
            color: palette.typography.white
        }
    }
})

export default bottonBarStyles;