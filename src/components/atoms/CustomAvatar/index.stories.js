import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import CustomAvatar from '../CustomAvatar'


export default {
    title: 'atoms/Avatar',
    decorators: [withKnobs]
}

export const Basic = () => {
    return (
        <CustomAvatar avatarUrl={text('url', 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50')} size={text('size', 'large')} />
    )
}
