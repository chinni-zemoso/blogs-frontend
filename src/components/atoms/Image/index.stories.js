import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Image from '../Image'


export default {
    title: 'atoms/Image',
    decorators: [withKnobs]
}

export const Basic = () => {
    return (
        <Image src={text('src', 'https://i.ibb.co/p1vf3cv/java-learning.png')} />
    )
}
