import React from 'react'
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    textTransform:'none',
}));

export default function CustomButton(props) {
    const classes = useStyles();
    return (
        <Button {...props}  style={{'textTransform':'none'}}>
            {props.label}
        </Button>
    )
}