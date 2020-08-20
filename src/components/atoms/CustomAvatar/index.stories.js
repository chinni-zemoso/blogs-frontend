import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import CustomAvatar from '../CustomAvatar'


export default {
    title: 'atoms/Avatar',
    decorators: [withKnobs]
}

export const Basic = () => {
    return (
        <CustomAvatar avatarUrl={text('url', '')} size={text('size', '')} />
    )
}

export const Large = () => {
    return (
        <CustomAvatar avatarUrl={text('url', '')} size='large' />
    )
}
