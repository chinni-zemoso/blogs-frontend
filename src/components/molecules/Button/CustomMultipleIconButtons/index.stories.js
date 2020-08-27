import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import CustomMultipleIconButtons from '../CustomMultipleIconButtons'

export default {
    title: 'molecules/Buttons/CustomMultipleIconButtons',
    decorators: [withKnobs]
}

export const Basic = () => {
    return (
        <CustomMultipleIconButtons />
    )
}
// export const WithIcons = () => {
//     const menuIcon = <CustomMenuIcon />
//     return (
//         <CustomMultipleIconButtons
//             outerIcon={menuIcon}
//             innerIcon={downArrowIcon} />

//     )
// }