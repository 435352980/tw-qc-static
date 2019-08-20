import React, { FC, HTMLProps } from 'react';

const Container: FC<HTMLProps<HTMLDivElement>> = props => {
  return <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }} {...props} />;
};

export default Container;
