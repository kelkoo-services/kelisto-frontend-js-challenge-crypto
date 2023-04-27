import React from "react";
import { Grid } from "@material-ui/core";
import bottonBarStyles from './bottonNavBarStyles';
import Dashboard from '../../assets/icons/Icon-Dashboard.svg';
import Card from '../../assets/icons/Icon-Card.svg';
import Refresh from '../../assets/icons/Icon-Refresh.svg';
import Settings from '../../assets/icons/Icon-Settings.svg';


export default function BottonpBar(props){
    const  classes = bottonBarStyles();

    const {numberMenu, setNumberMenu} = props;


    function changeButonMenu(params) {
        setNumberMenu(params);
    }

    return (
        <>
            <Grid className={classes.root} >
                <Grid className={numberMenu === 1 ? 
                    classes.contentIconActive : classes.contentIcon}
                    onClick={() => changeButonMenu(1)}
                >
                    <img 
                        alt="Dashboard"
                        src={Dashboard}
                        className={numberMenu === 1 ? classes.icoActive : classes.ico}
                    />
                </Grid>
                <Grid className={numberMenu === 2 ?
                    classes.contentIconActive : classes.contentIcon}
                    onClick={() => changeButonMenu(2)}
                >
                    <img 
                        alt="Card"
                        src={Card}
                        className={numberMenu === 2 ? classes.icoActive : classes.ico}
                    />
                </Grid>
                <Grid className={numberMenu === 3 ? 
                    classes.contentIconActive : classes.contentIcon}
                    onClick={() => changeButonMenu(1)}
                >
                    <img 
                        alt="Refresh"
                        src={Refresh}
                        className={numberMenu === 3 ? classes.icoActive : classes.ico}
                    />
                </Grid>
                <Grid className={numberMenu === 4 ? 
                    classes.contentIconActive : classes.contentIcon}
                    onClick={() => changeButonMenu(4)}
                >
                    <img 
                        alt="Settings"
                        src={Settings}
                        className={numberMenu === 4 ? classes.icoActive : classes.ico}
                    />
                </Grid>
            </Grid>
        </>
    )
}