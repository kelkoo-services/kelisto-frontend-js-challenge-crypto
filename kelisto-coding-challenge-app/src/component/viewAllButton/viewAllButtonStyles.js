import { lighten, makeStyles } from '@material-ui/core/styles';

const viewAllButtonStyles = makeStyles(
    (theme) => {
      const { typography, palette } = theme;
      const { pxToRem } = typography;
      return {
        root:{
            background: palette.button.primary,
            color: palette.typography.white,
            margin: `${pxToRem(16)} ${pxToRem(0)}`,
            fontWeight: '400',
            fontSize: pxToRem(16),
            lineHeight: pxToRem(19),
            minHeight: pxToRem(64),
            borderRadius: pxToRem(10),
            display: 'flex',
            cursor: 'pointer',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 150ms ease',
            '&:hover': {
                fontSize: pxToRem(18),
                backgroundColor: lighten(palette.common.main, 0.2),
            },
            '&:active': {
                fontSize: pxToRem(16),
                backgroundColor: lighten(palette.common.main, 0.3),
                margin: `${pxToRem(16)} ${pxToRem(10)}`,
            }
        }
    }
})

export default viewAllButtonStyles;