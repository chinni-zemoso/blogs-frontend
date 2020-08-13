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

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailsTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '1em',
        justifyContent: 'space-evenly',
        // '& > *:not(:first-child)': {
        //     marginTop: theme.spacing(3),
        // },
    },
    circularProgress: {
        alignSelf: 'flex-start',
        marginLeft: '8px',
        marginRight: '30px'
    },
    descriptionContainer: {
        marginTop: '30px',
        '& > *:not(:first-child)': {
            marginTop: theme.spacing(2),
        },
    },
    dropDownContainer: {
        display: 'flex',
        flexDirection: 'row',

        marginTop: '14px'
    },
    button: {
        width: '151px',
        height: '32px',
    },
    bookContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    actionButtons: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        color: 'iconFill',
        marginTop: '16px',
        '& > *:not(:first-child)': {
            marginLeft: theme.spacing(6),
        },
    },
    imageContainer: {
        width: '180px'
    }
}))


export default function BlogContentCard(props) {
    const classes = useStyles()

    return (
        <div >
            <div className={classes.root}>

                <img className={classes.cover} src={LearnJavaImage} />
                <div className={classes.title} >
                    {'Instant java learning'}
                </div>
                <div style={{ display: "flex", alignItems: 'center' }}>
                    {/* <div className={classes.by} >Author</div> */}
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <CustomAvatar avatarUrl={props.avatarUrl} />
                        <Typography variant='body2' >
                            {"by James Gosling"}
                        </Typography>
                    </div>
                    <Typography className={classes.author} variant="body2">{'props.author.name'}</Typography>
                </div>
                <div>
                    <div style={{ paddingLeft: '24px', paddingRight: '13px', paddingTop: '12px', paddingBottom: '12px' }}>

                    </div>
                    <Divider></Divider>
                    <div style={{ display: "flex", marginTop: "12px", alignItems: "center" }}>

                    </div>
                   
                </div>
            </div>



            {/* <div id='blogContentCard' className={classes.root}> */}
            <Grid container direction="column" alignItems="center" alignContent="center">
                <Grid item xs >
                    {/* <img src={props.image} alt="slow-network" /> */}
                    <img src={LearnJavaImage} alt="slow-network" />
                </Grid>
                <Grid item xs>
                    <Typography variant='h2' className={classes.header} >Instant java learning</Typography>
                </Grid>
                {/* <Grid item xs> */}
                {/* <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginTop: '8px' }}> */}


                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '8px' }}>
                    <CustomAvatar avatarUrl={props.avatarUrl} />
                    <Typography variant='body2' >
                        {"by James Gosling"}
                    </Typography>
                </div>

                {/* </div> */}
                {/* <Typography variant='h6' className={classes.header} >by James Gosling </Typography> */}
                {/* </Grid> */}
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