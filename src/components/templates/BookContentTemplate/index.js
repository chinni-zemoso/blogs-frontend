import { makeStyles, Box, Typography } from '@material-ui/core'
import React from 'react'
import PrimarySearchAppBar from '../../molecules/AppBar/PrimarySearchAppBar'
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%',
        width: '1112px',
        paddingTop: '30px',
        paddingBottom: '76px',
        margin: 'auto',
        '& $element': {
            marginTop: '30px'
        },
        alignItems: 'center'
    }, root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: "520px",
        height: "571px",
        borderRadius: "6px",
        border: "solid 3px #dfe3eb",
        boxShadow: `0px 2px 4px ${theme.palette.grey[300]}`,
        paddingBottom: '12px'
    }
}))

export default function BookContentTemplate(props) {
    const classes = useStyles();
    // const blogsList = props.blogContentCardList;
    // console.log("template - "+blogsList)
    // var json= JSON.parse(blogsList);
    const blog =
    {
        "image": "https://i.ibb.co/p1vf3cv/java-learning.png",
        "title": "Instant Java Leanrning",
        "author": "James Gosling",
        "avatarUrl": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        "body": "Java is among the most popular programming languages out there, mainly because of how versatile and compatible it is. Java can be used for a large number of things, including software development, mobile applications, and large systems development. As of 2019, 88% market share of all smartphones run on Android, the mobile operating system written in Java. Knowing Java opens a great deal of doors for you as a developer."
    }
        ;
    console.log(blog);
    return (
        // <div className={classes.container}>
        //     {blogsList}
        // </div>
        <Box display='flex' position="absolute" width="100%" height="100%" display="flex" flexDirection="column" >
            <Box>
                <Box height="10%"> <PrimarySearchAppBar /></Box>
            </Box>
            <Box >
                <Box  >
                    <Box height="250px"> <img src={blog.image} /></Box>
                    <Box height="30%" >
                        <Typography variant='subtitle1' className={classes.title}>
                            {blog.title}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}