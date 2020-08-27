import React from 'react'
import { IconButton, Button } from '@material-ui/core';

export default function CustomMultipleIconButtons(props) {
    return (
        <IconButton {...props.outerIconProps}>
            {props.outerIcon}
            <IconButton {...props.innerIconProps} style={{ padding: '0px' }}>
                {props.innerIcon}
            </IconButton>
        </IconButton>
    )
}