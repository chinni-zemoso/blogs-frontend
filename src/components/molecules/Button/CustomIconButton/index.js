import React from 'react'
import { IconButton, } from '@material-ui/core';
import CustomTypography from '../../../atoms/Typography'

export default function IconTextButton(props) {
    return (
        <IconButton {...props.iconProps} >
            {props.icon}
            <CustomTypography {...props.labelProps}>
                {props.label}
            </CustomTypography>
        </IconButton>
    )
}