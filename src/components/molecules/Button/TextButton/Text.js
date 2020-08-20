import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from '@material-ui/core';
import { buttonText } from '../../../../utils/colorPallete';

const useStyles = makeStyles({
    more: {
        fontSize: "12px",
        color: buttonText,
        textTransform: 'none',
    },
})

export default function ReadMore(props) {
    const classes = useStyles();

    return (
        <Button>
            <Typography className={classes.more} >
                Read more...
            </Typography>
        </Button>
    )
}