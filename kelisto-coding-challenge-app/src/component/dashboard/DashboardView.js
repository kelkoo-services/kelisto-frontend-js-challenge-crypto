import React, { useState }from "react";
import { Grid } from "@material-ui/core";
//STYLES//
import dashboardStyles from './DashboardStyles';

//COMPONENTS//
import TopNavBar from "../topNavBar/topNavBar";
import YourBalanceCard from "../yourBalance/yourBalance";
import Transactions from "../transactions/transactions";
import BottonNavBar from "../bottonNavBar/bottonNavBar";
import ViewAllButton from "../viewAllButton/viewAllButton";
import UnderConstruction from "../underConstruction/underConstruction";
//JSON//
import data from '../../data/response.json';
import userData from '../../data/userData.json';

export default function DashboardView(){
    const  classes = dashboardStyles();
    const [numberMenu, setNumberMenu] = useState(1);
    
    function isEmptyObject(obj) {
            return Object.keys(obj).length === 0;
        }   
    
    return (
        <>
            <Grid className={classes.root} >
                
                <Grid className={classes.container}>
                    
                    <Grid>

                    </Grid>
                    <Grid className={classes.containerTop}>
                        <TopNavBar
                        userData={!isEmptyObject(userData) ? userData : null}/>
                        <YourBalanceCard
                        data ={!isEmptyObject(data) ? data : null}/>
                        {numberMenu === 1 && <Transactions
                        data={!isEmptyObject(data) ? data : null}/>}
                        {numberMenu !== 1 && <UnderConstruction/>}
                    </Grid>
                </Grid>
                <Grid className={classes.containerBotton}>
                    {numberMenu === 1 && !isEmptyObject(data) && <ViewAllButton/>}
                    <BottonNavBar
                    numberMenu = { numberMenu }  
                    setNumberMenu = { setNumberMenu }
                    />
                 </Grid>
            </Grid>
        </>
    )
}