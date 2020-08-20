import React from 'react'
import TextButton from './Text'
import { text, withKnobs } from '@storybook/addon-knobs'
import { Button } from '@material-ui/core'

export default {
    title: 'molecules/buttons/TextButtom',
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

