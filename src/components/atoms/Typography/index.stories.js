import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import CustomTypography from '../Typography'

export default {
    title: 'atoms/CustomTypography',
    decorators: [withKnobs]
}

export const Basic = () => {
    return (
        <CustomTypography>
            {text('Label', 'Type here...')}
        </CustomTypography>

    )
}