import { makeStyles, } from '@material-ui/core'
import React from 'react'

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
    },
}))

export default function BookContentTemplate(props) {
    const classes = useStyles();
    const blogsList = props.blogContentCardList;

    return (
        <div className={classes.container}>
            {blogsList}
        </div>
    )
}