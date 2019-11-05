import React, { useState, FC } from 'react';
import QrReader from 'react-qr-reader';
import { RouteComponentProps } from 'react-router';
import { makeStyles, createStyles } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import moment from 'moment';
import Header from './Header';
import localStore, { LocalRecord } from '@/util/localStore';

const useStyles = makeStyles(() =>
  createStyles({ root: { display: 'flex', flexDirection: 'column' } }),
);

const recordsDb = localStore.get('records');

const Scan: FC<RouteComponentProps> = props => {
  const classes = useStyles();
  const matches = useMediaQuery('@media (min-width:600px)');
  const [loading, setLoading] = useState(false);

  return (
    <div className={classes.root}>
      <Header title="扫描速查装备二维码" {...props} />
      <QrReader
        onError={err => console.log(err)}
        onScan={data => {
          if (data) {
            setLoading(true);
            try {
              const insertData = JSON.parse(data) as LocalRecord;
              //比对是否为重复插入
              const findRecord = recordsDb.find({ file: insertData.file }).value();
              if (!findRecord) {
                recordsDb
                  .insert({ ...insertData, time: moment().format('YYYY-MM-DD HH:mm:ss') })
                  .write();
                setLoading(false);
                props.history.push('/record');
              } else {
                recordsDb.upsert({
                  id: findRecord.id,
                  ...insertData,
                  time: moment().format('YYYY-MM-DD HH:mm:ss'),
                });
                setLoading(false);
                props.history.push('/record');
              }
            } catch (error) {
              setLoading(false);
            }
          }
        }}
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
