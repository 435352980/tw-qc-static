import React, { FC, HTMLProps } from 'react';

import { useMediaQuery } from '@material-ui/core';

const Content: FC<HTMLProps<HTMLDivElement>> = props => {
  const matches = useMediaQuery('@media (min-width:600px)');
  return <div style={{ marginTop: matches ? 64 : 56, flex: 1 }} {...props} />;
};

export default Content;
