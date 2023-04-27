import { makeStyles } from '@material-ui/core/styles';
import {minScreenWidth} from '../../constants/const';

const topBarStyles = makeStyles(
  (theme) => {
    const { typography, palette } = theme;
    const { pxToRem } = typography;
    return {
        root: {
            padding: pxToRem(0),
            margin: pxToRem(0),
            minWidth: minScreenWidth,
            height: pxToRem(60),
            background: palette.common.main,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'default'
        },
        ico:{
            width: pxToRem(22),
            height:  pxToRem(22),
            position: 'absolute',
            right: pxToRem(16),
            cursor: 'pointer',
            transition: 'all 150ms ease',
            '&:hover': {
                width: pxToRem(26),
                height:  pxToRem(26),
            },
            '&:active': {
                width: pxToRem(20),
                height:  pxToRem(20),
            },
        },
        typographyName:{
            fontSize: pxToRem(16),
            fontWeight: '400',
            lineHeight: pxToRem(19),
            letterSpacing: 0,
            textAlign: 'left',
            color: palette.typography.white,
            cursor: 'default'
        }
    }
})

export default topBarStyles;