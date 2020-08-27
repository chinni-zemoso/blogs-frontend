import React from 'react'
import { Button } from '@material-ui/core';

export default function TextButton(props) {
    const label = props.label;
    return (
        <Button {...props}>
            {label}
        </Button>
    )
}