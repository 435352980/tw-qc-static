import React, { FC } from 'react';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import DeleteIcon from '@material-ui/icons/Delete';
import HomeIcon from '@material-ui/icons/Home';
import { AppBar, Toolbar } from '@material-ui/core';
import { RouteComponentProps } from 'react-router';
import { useStoreActions, useStoreState } from '@/store';
import styled from '@emotion/styled';

const SearchInput = styled(({ className, ...props }) => (
  <InputBase classes={{ root: className }} {...props} />
))`
  color: inherit;
`;

const Header: FC<RouteComponentProps> = ({ history }) => {
  const searchText = useStoreState((state) => state.search.searchText);
  const setSearchText = useStoreActions((actions) => actions.search.setSearchText);

  return (
    <AppBar position="fixed" elevation={1}>
      <Toolbar>
        <IconButton color="inherit" style={{ padding: 10 }} onClick={() => history.goBack()}>
          <ArrowBackIcon />
        </IconButton>
        <SearchInput
          placeholder="请输入装备名称"
          style={{ marginLeft: 8, flex: 1 }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <IconButton color="inherit" style={{ padding: 10 }} onClick={() => setSearchText('')}>
          <DeleteIcon />
        </IconButton>
        <Divider style={{ width: 1, height: 28, margin: 4, color: 'white' }} />
        <IconButton color="inherit" style={{ padding: 10 }} onClick={() => history.push('/')}>
          <HomeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
