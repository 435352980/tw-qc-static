import React from 'react';
import { Typography, makeStyles, createStyles } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
  createStyles({ cursorPointer: { cursor: 'pointer' }, cursorDefault: { cursor: 'default' } }),
);

const SimpleCell: React.FC<TypographyProps & { pointer?: boolean }> = ({ pointer, ...props }) => {
  const classes = useStyles();
  return (
    <Typography
      variant="body1"
      {...props}
      className={pointer ? classes.cursorPointer : classes.cursorDefault}
    />
  );
};

export default SimpleCell;
