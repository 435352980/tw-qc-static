import React, { FC } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { RouteComponentProps } from 'react-router';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CropFreeIcon from '@material-ui/icons/CropFree';

import SearchIcon from '@material-ui/icons/Search';

interface GoodPageProps extends RouteComponentProps {
  title?: string;
  onMenuClick: () => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
);

const Header: FC<GoodPageProps> = ({ title = `${APP_NAME}`, history, onMenuClick }) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton color="inherit" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" align="center" className={classes.title}>
          {title}
        </Typography>

        <IconButton color="inherit" onClick={() => history.push('/search')}>
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit" onClick={() => history.push('/scan')}>
          <CropFreeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
