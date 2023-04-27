import { makeStyles } from '@material-ui/core/styles';

const transactionsStyles = makeStyles(
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
            cursor: 'default'
            
        },
        title:{
            color:palette.typography.darkGrey,
            fontFamily: "Roboto",
            fontWeight: '300',
            fontSize: pxToRem(18),
            lineHeight: pxToRem(21),
            letterSpacing: pxToRem(2),
            paddingLeft: pxToRem(16),
            paddingRight: pxToRem(16),
            marginBottom: pxToRem(15)
        },
        noData:{
            color:palette.typography.darkGrey,
            fontFamily: "Roboto",
            fontWeight: '500',
            fontSize: pxToRem(20),
            textAlign: 'center',
            paddingLeft: pxToRem(16),
            paddingRight: pxToRem(16),
            marginBottom: pxToRem(15)
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        containerCripto: {
            padding: `${pxToRem(15)} ${pxToRem(0)}`,

        },
        button:{
            background: palette.button.primary,
            color: palette.typography.white,
            margin: `${pxToRem(16)} ${pxToRem(0)}`,
            fontWeight: '400',
            fontSize: pxToRem(16),
            lineHeight: pxToRem(19),
            height: pxToRem(64),
            borderRadius: pxToRem(10),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
})

export default transactionsStyles;