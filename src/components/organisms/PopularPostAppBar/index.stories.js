import React from 'react'
import PopularPostAppBar from '.'
import { withKnobs } from '@storybook/addon-knobs'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../../utils/theme'

export default {
  title: 'organism/PopularPostAppBar',
  decorators: [withKnobs],
};

export const Basic = () => (

  <ThemeProvider theme={theme}>
  <Router>
    <PopularPostAppBar />
  </Router>
  </ThemeProvider>
);