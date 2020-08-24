import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import CustomMenuItem from '../CustomMenuItem'


export default {
    title: 'atoms/CustomMenuItem',
    decorators: [withKnobs]
}

export const Basic = () => {
    return (
        <CustomMenuItem />
    )
}

export const Label = () => {
    return (
        <CustomMenuItem label={text('Label', 'Type here...')}/>
    )
}