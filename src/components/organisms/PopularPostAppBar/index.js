import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconTextButton from '../../molecules/Button/CustomIconButton'
import { Whatshot, NewReleases, Equalizer, TrendingUp, Menu, ArrowDropDown } from '@material-ui/icons';
import IconLabels from '../../../utils/iconsData.json'
import MultipleIconsButton from '../../molecules/Button/CustomMultipleIconButtons'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
  toggelGroup: {
    ariaLabel: "text alignment",
    borderRadius: '0px',

  }, toggleButton: {


  }
}))

export default function PopularPostAppBar() {
  const classes = useStyles()
  const [alignment, setAlignment] = React.useState('hot');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleOnClick = () => {
    console.log('onclick')
  }

  // const labelProps = { variant: 'h1' }
  return (
    <AppBar position='sticky' color='inherit'>
      <Toolbar >
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={11}>
            <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} className={classes.toggelGroup}>
              <ToggleButton value="hot" aria-label="left aligned" className={classes.toggleButton} onClick={handleOnClick}>
                <IconTextButton icon={<Whatshot />} label={IconLabels.hotIcon.label} />
              </ToggleButton>
              <ToggleButton value="new" aria-label="centered" className={classes.toggleButton}>
                <IconTextButton icon={<NewReleases />} label={IconLabels.newIcon.label} />
              </ToggleButton>
              <ToggleButton value="top" aria-label="right aligned" className={classes.toggleButton}>
                <IconTextButton icon={<Equalizer />} label={IconLabels.topIcon.label} />
              </ToggleButton>
              <ToggleButton value="rising" aria-label="justified" className={classes.toggleButton}>
                <IconTextButton icon={<TrendingUp />} label={IconLabels.risingIcon.label} />
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid item xs={1} style={{ marginLeft: 'auto', padding: '0px' }} >
            <MultipleIconsButton outerIcon={<Menu />} innerIcon={<ArrowDropDown />} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
