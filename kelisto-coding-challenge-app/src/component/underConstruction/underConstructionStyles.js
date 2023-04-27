import { makeStyles } from '@material-ui/core/styles';

const underConstructionStyles = makeStyles(
  (theme) => {
    const { typography, palette } = theme;
    const { pxToRem } = typography;
    return {
        root: {
            background: palette.common.white,
            padding: pxToRem(0),
            minHeight: pxToRem(300),
            margin: pxToRem(0),
            borderRadius: `${pxToRem(30)} ${pxToRem(30)} ${pxToRem(0)} ${pxToRem(0)}`,
            paddingLeft: pxToRem(16),
            paddingRight: pxToRem(16),
            paddingTop: pxToRem(28),
            display: 'flex',
            flexDirection: 'column',
            cursor: 'default',
            justifyContent: 'center',
            alignItems: 'center'
            
        },
        img:{
            width: '90%',
            maxWidth: pxToRem(870),
            filter: 'drop-shadow(2px 4px 6px black)',
        }
    }
})

export default underConstructionStyles;