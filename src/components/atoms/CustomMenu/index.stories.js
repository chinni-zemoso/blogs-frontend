import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import CustomMenu from '../CustomMenu'

export default {
    title: 'atoms/CustomMenu',
    decorators: [withKnobs]
}

export const Basic = () => {
    return (
        <CustomMenu  />
    )
}