import React, { FC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import DeleteIcon from '@material-ui/icons/Delete';
import HomeIcon from '@material-ui/icons/Home';
import { AppBar, Toolbar } from '@material-ui/core';
import { RouteComponentProps } from 'react-router';
import { useStoreActions, useStoreState } from '@/store';

const useStyles = makeStyles(() =>
  createStyles({
    input: { marginLeft: 8, flex: 1 },
    inputRoot: { color: 'inherit' },
    iconButton: { padding: 10 },
    divider: { width: 1, height: 28, margin: 4, color: 'white' },
  }),
);

const Header: FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles();
  const searchText = useStoreState(state => state.search.searchText);
  const setSearchText = useStoreActions(actions => actions.search.setSearchText);

  return (
    <AppBar position="fixed" elevation={1}>
      <Toolbar>
        <IconButton color="inherit" className={classes.iconButton} onClick={() => history.goBack()}>
          <ArrowBackIcon />
        </IconButton>
        <InputBase
          placeholder="请输入装备名称"
          className={classes.input}
          classes={{ root: classes.inputRoot }}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <IconButton
          color="inherit"
          className={classes.iconButton}
          onClick={() => setSearchText('')}
        >
          <DeleteIcon />
        </IconButton>
        <Divider className={classes.divider} />
        <IconButton
          color="inherit"
          className={classes.iconButton}
          onClick={() => history.push('/')}
        >
          <HomeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
