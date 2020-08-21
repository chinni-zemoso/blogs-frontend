import React from 'react'
import { Typography, Grid, makeStyles, Box } from "@material-ui/core";
import AuthorWithAvatar from '../../molecules/Author';
import TextButton from '../../molecules/Button/TextButton/Text';
import Comments from '../../molecules/Comments/Comments';
import PrimarySearchAppBar from '../../molecules/AppBar/PrimarySearchAppBar'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "550px",
        height: "571px",
        borderRadius: "6px",
        border: "solid 3px #dfe3eb",
        boxShadow: `0px 2px 4px ${theme.palette.grey[300]}`,
        paddingBottom: '12px'
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
        marginLeft: '12px',
        marginRight: '8px',
        // marginBottom: "2px",
        marginTop: '10px',
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    }, authorWithAvatar: {
        'padding-left': "13px",
        'padding-bottom': "5px",
        'padding-top': "5px",
        width: "528px",
    }, spacing: {
        marginTop: "50px"
    },
    header: {
        marginTop: "40px",
        fontWeight: 600
    },
    button: {
        color: "orange"
    },
}));


export default function BlogContentCard(props) {
    const classes = useStyles();
    const comments = [{ "id": "2", "name": "chinni", "email": "chinni@gmail.com", "body": "body content" }, { "id": "1", "name": "chinni", "email": "chinni@gmail.com", "body": "body content" }];
    return (
        <></>
        // <Grid container direction="column" alignContent="center" className={classes.root} >
        //     <Grid item xs>
        //         <img className={classes.cover} src={props.image} />
        //         <Typography variant='subtitle1' className={classes.title}>
        //             {props.title}
        //         </Typography>
        //     </Grid>
        //     <Grid item xs className={classes.authorWithAvatar} style={{ overflow: "hidden", textOverflow: "ellipsis" }} >
        //         <AuthorWithAvatar
        //             avatarUrl={props.avatarUrl}
        //             author={props.author}
        //             size={props.size} />
        //     </Grid>
        //     <Grid item xs>
        //         <Typography variant='body1' className={classes.body}>
        //             {props.body}
        //         </Typography>
        //     </Grid>
        //     <Grid item xs style={{ marginLeft: '5px' }}>
        //         <TextButton />
        //     </Grid>
        //     <Grid item xs>
        //         <Typography variant='h5'>
        //             Comments
        //         </Typography>
        //         <Comments comments={comments} />
        //     </Grid>
        // </Grid>
    );
}