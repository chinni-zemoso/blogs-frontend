import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import CustomIconButton from '../CustomIconButton'
import WhatshotIcon from '@material-ui/icons/Whatshot';

export default {
    title: 'molecules/Buttons/CustomIconButton',
    decorators: [withKnobs]
}

export const Basic = () => {
    return (
        <CustomIconButton
            label={text('Label', 'Hot')}
            icon={<WhatshotIcon />} />
    )
}
