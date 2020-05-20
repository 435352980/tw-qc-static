import React, { useEffect, useCallback } from 'react';
import { useStoreActions, useStoreState } from '@/store';
import getLocal from '@/seed/getLocal';
import PageFrame from '@/views/PageFrame';
import { Typography } from '@material-ui/core';
import getDataSource from './getDataSource';

const Main = () => {
  // console.log('render-main');
  const dataHelper = useStoreState(state => state.app.dataHelper);
  const local = useStoreState(state => state.app.local);
  const setLocal = useStoreActions(actions => actions.app.setLocal);
  const setDataHelper = useStoreActions(actions => actions.app.setDataHelper);

  useEffect(() => {
    document.oncontextmenu = e => e.preventDefault();
  }, []);

  const loadData = useCallback(async () => {
    const local = getLocal('cn') as Local;
    const data = await getDataSource('cn');
    setLocal(local);
    setDataHelper(data);
  }, [setDataHelper, setLocal]);

  //初始化数据
  useEffect(() => {
    // console.log('set-data');
    loadData();
  }, [loadData]);

  return (
    <div>
      {(!dataHelper || !local) && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" color="primary">
            Loading Data...
          </Typography>
        </div>
      )}
      {dataHelper && local && <PageFrame />}
    </div>
  );
};

export default Main;
