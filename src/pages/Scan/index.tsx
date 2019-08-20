import React, { useState, FC } from 'react';
import QrReader from 'react-qr-reader';
import { RouteComponentProps } from 'react-router';
import { makeStyles, createStyles } from '@material-ui/styles';
import { typography } from '@material-ui/system';
import { Typography, useMediaQuery } from '@material-ui/core';
import Header from './/Header';

const useStyles = makeStyles(() =>
  createStyles({ root: { display: 'flex', flexDirection: 'column' } }),
);

const Scan: FC<RouteComponentProps> = props => {
  const classes = useStyles();
  const matches = useMediaQuery('@media (min-width:600px)');
  const [result, setResult] = useState<string | null>('');

  return (
    <div className={classes.root}>
      <Header {...props} />
      <QrReader
        onError={err => console.log(err)}
        onScan={data => data && setResult(data)}
        style={{
          width: '100%',
          height: `calc(100vh - ${matches ? 64 : 56}px)`,
          display: 'flex',
          background: '#000',
          alignItems: 'center',
        }}
      />
    </div>
  );
};

export default Scan;
