import React from 'react'
import { Grid, makeStyles } from "@material-ui/core";
import Typography from '../../atoms/Typography'
import Image from '../../atoms/Image'
import AuthorWithAvatar from '../../molecules/Author';
import CustomTextButton from '../../molecules/Button/CustomTextButton/Text';
import Comments from '../../molecules/Comments/Comments'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        flexWrap: "nowrap",
        alignContent: "space-between",
        width: "550px",
        height: 'auto',
        borderRadius: "6px",
        border: "solid 3px #dfe3eb",
        boxShadow: `0px 2px 4px ${theme.palette.grey[300]}`,
        paddingBottom: '12px',
        backgroundcolor: 'grey',
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
        marginLeft: '12px',
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    }, body: {
        marginLeft: '12px',
        marginRight: '8px',
        marginTop: '10px',
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    }, authorWithAvatar: {
        'padding-left': "13px",
        'padding-bottom': "5px",
        'padding-top': "5px",
        width: "530px",
    }
}));


export default function BlogContentCard(props) {
    const classes = useStyles();
    console.log("comments" + props.comments)
    return (
        <Grid container direction="column" alignContent="center" className={classes.root} >
            <Grid item xs>
                <Image src={props.image} className={classes.cover}/>
                <Typography variant='subtitle1' className={classes.title}>
                    {props.title}
                </Typography>
            </Grid>
            <Grid item xs className={classes.authorWithAvatar}>
                <AuthorWithAvatar
                    avatarUrl={props.avatarUrl}
                    author={props.author}
                    size={props.size} />
            </Grid>
            <Grid item xs>
                <Typography variant='body1' className={classes.body} >
                    {props.body}
                </Typography>
            </Grid>
            <Grid item xs >
                <CustomTextButton label='Read more...' style={{ marginLeft: '5px', fontSize: '12px', color: 'buttonText', textTransform: 'none' }} />
            </Grid>
            <Grid item xs style={{ marginLeft: '12px' }}>
                <Typography variant='subtitle1'>
                    Comments
                 </Typography>
                <Comments comments={props.comments} />
            </Grid>
        </Grid>
    );
}