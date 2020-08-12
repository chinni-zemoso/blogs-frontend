import React, { useState, useEffect } from 'react'
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import CustomAvatar from '../../atoms/CustomAvatar'
// import ImageLearnJava from '../../../assets/Ho
import LearnJavaImage from '../../../assets/How-to-learn-Java.png'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "494px",
        // height: "385px",
        borderRadius: "4px",
        border: "solid 1px #dfe3eb",
        boxShadow: `0px 2px 4px ${theme.palette.grey[300]}`,
        paddingBottom: '12px'
    },
    author: {
        width: "116px",
        height: "24px",
        color: theme.palette.grey.A200,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        marginTop: '2px'
    },
    by: {
        width: "42px",
        height: "22px",
        fontFamily: "Roboto",
        fontSize: "14px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.5",
        letterSpacing: "normal",
        color: "#6b6c6f",
        marginLeft: "32px",
        marginRight: "3px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
    },
    cover: {
        width: "180px",
        height: "190px",
        marginTop: "22px",
        marginRight: "37px",
        marginLeft: "37px"
    },
    title: {
        width: "216px",
        height: "28px",
        fontFamily: "Roboto",
        fontSize: "18px",
        fontWeight: "500",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.56",
        letterSpacing: "normal",
        color: theme.palette.grey.A200,
        marginTop: "12px",
        marginLeft: "32px",
        marginBottom: "6px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        // '&:hover':{
        //   overflow:'visible'
        // }
    },
    star: {
        width: "15px",
        height: "14px",
        marginRight: "5px",
        marginTop: "3px",
    },
}));

export default function BlogContentCard(props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            {/* <div id='blogContentCard' className={classes.root}> */}
                <Grid container direction="column" alignItems="center" alignContent="center">
                    <Grid item xs={12}>
                        {/* <img src={props.image} alt="slow-network" /> */}
                        <img src={LearnJavaImage} alt="slow-network" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h2' className={classes.header} >Instant java learning</Typography>
                    </Grid>
                    <Grid item xs>
                        <CustomAvatar avatarUrl={props.avatarUrl} />
                        <Typography variant='h6' className={classes.header} >by James Gosling </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant='body1' className={classes.body} style={{ marginBottom: "30px" }}>
                           This blog walks you through different stages of learning java.
                        </Typography>
                    </Grid>
                </Grid>
            {/* </div> */}

        </div>
    );
}