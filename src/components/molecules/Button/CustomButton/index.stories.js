import React from 'react'
import CustomButton from '../CustomButton'
import { text,withKnobs } from '@storybook/addon-knobs'

export default {
    title: 'molecules/Buttons/CustomButton',
    decorators: [withKnobs],
}

export const Basic = () => {
    return (
        <CustomButton label={text('Label', 'Type here...')}/>
    )
}

