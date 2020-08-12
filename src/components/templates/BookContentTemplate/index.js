import { makeStyles, } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%',
        width: '1112px',
        // paddingRight: '11.3%',
        // paddingLeft: '11.3%',
        paddingTop: '30px',
        paddingBottom: '76px',
        margin: 'auto',
        '& $element': {
            marginTop: '30px'
        }
    }, content: {
        width: '740px',
        margin: 'auto',
        '& $element': {
            marginTop: '30px'
        },
    },
    element: {
        marginTop: '30px'
    },
    seemore: {
        fontWeight: 'normal',
        color: theme.palette.primary.main
    },
    blockHeader: {
        marginBottom: '18px'
    },
}))

export default function BookContentTemplate(props) {

    const classes = useStyles();

    return (
        <div id='container' className={classes.container}>
            {/* <div id='content' className={classes.element}> */}
                {/* <div className={classes.blockHeader}> */}
                    {props.blogContentCard}
                {/* </div> */}
            {/* </div> */}
        </div >
    )
}