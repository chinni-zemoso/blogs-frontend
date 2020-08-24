import { withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import CustomMenuIcon from '../CustomMenuIcon'

export default {
    title: 'atoms/CustomMenuIcon',
    decorators: [withKnobs]
}

export const Basic = () => {
    return (
        <CustomMenuIcon />
    )
}