import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import CustomIconButton from '../CustomIconButton'

export default {
    title: 'molecules/Buttons/CustomIconButton',
    decorators: [withKnobs]
}

export const Basic = () => {
    return (
        <CustomIconButton />
    )
}
export const Label = () => {
    return (
        <CustomIconButton label={text('Label', 'Type here...')} />
    )
}
// export const WithIcon = () => {
//     const icon = <CustomHotIcon />
//     return (
//         <CustomIconButton icon={icon} label={text('Label', 'Type here...')} />
//     )
// }
// export const Label = () => {
//     return (
//         <CustomTypography>
//             {text('Label', 'Type here...')}
//         </CustomTypography>
//     )
// }