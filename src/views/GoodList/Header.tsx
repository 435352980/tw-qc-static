import React, { FC } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { RouteComponentProps } from 'react-router';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import CropFreeIcon from '@material-ui/icons/CropFree';

import SearchIcon from '@material-ui/icons/Search';
// import SaveIcon from '@material-ui/icons/Save';
import styled from '@emotion/styled';

interface GoodPageProps extends RouteComponentProps {
  title?: string;
  onMenuClick: () => void;
}

const Title = styled(Typography)`
  flex-grow: 1;
  display: 'flex';
  flex-direction: 'row';
  align-items: 'center';
  justify-content: 'center';
`;

const Header: FC<GoodPageProps> = ({ title = `${APP_NAME}`, history, onMenuClick }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton color="inherit" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>

        <Title variant="h6" align="center">
          {title}
        </Title>

        <IconButton color="inherit" onClick={() => history.push('/search')}>
          <SearchIcon />
        </IconButton>
        {/* <IconButton color="inherit" onClick={() => history.push('/record')}>
          <SaveIcon />
        </IconButton>
        <IconButton color="inherit" onClick={() => history.push('/scan')}>
          <CropFreeIcon />
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
