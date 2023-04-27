import { makeStyles } from '@material-ui/core/styles';
import {minScreenWidth} from '../../constants/const';

const dashboardStyles = makeStyles(
  (theme) => {
    const { typography, palette } = theme;
    const { pxToRem } = typography;
    return {
        root: {
            padding: pxToRem(0),
            margin: pxToRem(0),
            width: '100vw',
            minWidth: minScreenWidth,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        container:{
            height: '100vh',
        },
        containerTop: {
            background: palette.common.main,
             height: '50%',
        },
        containerBotton: {
            padding: pxToRem(16)
        },
        lateralNavBar:{
            width: pxToRem(100),
            height:'100vh',
            background:palette.common.main,

        }
    }
})

export default dashboardStyles;