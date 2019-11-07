import React, { FC } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { RouteComponentProps } from 'react-router';

import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import CropFreeIcon from '@material-ui/icons/CropFree';

import SearchIcon from '@material-ui/icons/Search';
import SaveIcon from '@material-ui/icons/Save';

interface GoodPageProps extends RouteComponentProps {
  title?: string;
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

const Header: FC<GoodPageProps> = ({ title = `${APP_NAME}`, history }) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton color="inherit" onClick={() => history.goBack()}>
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h6" align="center" className={classes.title}>
          {title}
        </Typography>

        <IconButton color="inherit" onClick={() => history.push('/')}>
          <HomeIcon />
        </IconButton>
        <IconButton color="inherit" onClick={() => history.push('/search')}>
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit" onClick={() => history.push('/record')}>
          <SaveIcon />
        </IconButton>
        <IconButton color="inherit" onClick={() => history.push('/scan')}>
          <CropFreeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
