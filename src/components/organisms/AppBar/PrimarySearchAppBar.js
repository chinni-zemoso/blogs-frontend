import React from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CustomAvatar from '../../atoms/CustomAvatar';
import CustomMenuIcon from '../../atoms/CustomMenuIcon';
import CustomMenuList from '../../molecules/CustomMenuList';
import CustomMenu from '../../atoms/CustomMenu'
import JsonMenuList from '../../../utils/menuList.json';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    'margin-right': 'auto',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const list = JsonMenuList;

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <CustomMenu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <CustomMenuList list={list} />
    </CustomMenu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="sticky">
        <Toolbar style={{justifyContent: 'space-between'}}>
          <IconButton
            edge="start"
            aria-label="open drawer"
            aria-controls={menuId}
            aria-haspopup="true"
            className={classes.menuButton}
            color="inherit"
            onClick={handleMenuClick}
          >
            <CustomMenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" >
            Tech-Blog
          </Typography>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <CustomAvatar size="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
