import React, { useEffect, createRef, useState, FC } from 'react';
import { Dialog, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import html2canvas from 'html2canvas';
import { RouteComponentProps } from 'react-router';
import { makeStyles, createStyles } from '@material-ui/styles';
import DetailTables from './DetailTables';
import GoodIntro from './GoodIntro';
import { getDb, getImage } from '@/db';
// import BossDrop from './BossDrop';

const useStyles = makeStyles(() => createStyles({ title: { flexGrow: 1 } }));

const DetailView: FC<RouteComponentProps<{ name: string }>> = props => {
  const classes = useStyles();
  const good = getDb('goods').find('name', props.match.params.name);
  const id = good ? good.id : null;
  //   const push = props.history.push;
  const printRef = createRef<HTMLDivElement>();
  const [dialogVisible, setDialogVisible] = useState(false);
  const [imageData, setImageData] = useState('');
  // const setDetailView = useActions(actions => actions.view.setDetailView);
  useEffect(() => {
    // const ele = document.querySelector('#pageContent');
    // ele && (ele.scrollTop = 0);
    document.documentElement.scrollTop = 0;
    // window.pageYOffset = 0;
    document.body.scrollTop = 0;
  }, [props.match.params.name]);
  return !id ? (
    <div />
  ) : (
    <div ref={printRef}>
      <GoodIntro
        {...props}
        id={id}
        handleCopy={() => {
          printRef.current &&
            html2canvas(printRef.current).then(canvas => {
              setImageData(canvas.toDataURL('image/png', 1));
              setDialogVisible(true);
            });
        }}
      />
      <DetailTables id={id} {...props} />
      <Dialog fullScreen open={dialogVisible} onClose={() => setDialogVisible(false)}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" align="center" className={classes.title}>
              {APP_NAME}
            </Typography>
            <IconButton color="inherit" onClick={() => setDialogVisible(false)} aria-label="Close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <img style={{ width: '100%' }} src={imageData || getImage('BTNSpy')} />
      </Dialog>
    </div>
  );
};

export default DetailView;
