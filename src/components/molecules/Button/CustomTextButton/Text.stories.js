import React from 'react'
import TextButton from './Text'
import { withKnobs } from '@storybook/addon-knobs'

export default {
    title: 'molecules/Buttons/CustomTextButton',
    decorators: [withKnobs],
    argTypes: {
        label: { control: 'text' },
    },
}

export const Basic = () => {
    return (
        <TextButton />
    )
}

