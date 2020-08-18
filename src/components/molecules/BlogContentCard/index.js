import React from 'react'
import { Typography, Grid, makeStyles } from "@material-ui/core";
import CustomAvatar from '../../atoms/CustomAvatar'
import LearnJavaImage from '../../../assets/ML-java.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "550px",
        borderRadius: "6px",
        border: "solid 3px #dfe3eb",
        boxShadow: `0px 2px 4px ${theme.palette.grey[300]}`,
        paddingBottom: '12px'
    },
    author: {
        width: "480px",
        color: theme.palette.grey.A200,
        marginTop: '-42px',
        marginLeft: "59px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    },
    cover: {
        width: "530px",
        height: "190px",
        marginTop: "15px",
        marginLeft: "6px",
        marginRight: "8px"
    },
    title: {
        width: "530px",
        height: "28px",
        fontFamily: "Roboto",
        fontSize: "18px",
        fontWeight: "500",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.56",
        marginTop: '6px',
        marginLeft: '13px',
        letterSpacing: "normal",
        color: theme.palette.grey.A200,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    }, body: {
        marginLeft: '15px',
        marginRight: '8px',
        marginBottom: "30px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    }
}));


export default function BlogContentCard(props) {
    const classes = useStyles();
    // const imageUrl = props.image;
    return (
        <Grid container direction="column" alignContent="center" className={classes.root} >
            <Grid item xs={12}>
                <img className={classes.cover} src={LearnJavaImage} />
                <Typography variant='subtitle1' className={classes.title}>
                    {props.title}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <CustomAvatar avatarUrl={props.avatarUrl} />
            </Grid>
            <Grid item xs={6}>
                <Typography className={classes.author} variant='body2'>
                    by {props.author}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='body1' className={classes.body}>
                    {props.body}
                </Typography>
            </Grid>
        </Grid>
    );
}