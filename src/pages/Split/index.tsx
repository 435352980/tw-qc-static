import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { makeStyles, createStyles } from '@material-ui/styles';
// import { Dialog, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';
// import html2canvas from 'html2canvas';
import Header from './Header';
import Container from '@/components/Container';
import Content from '@/components/Content';
import SplitChart from '@/components/SplitChart';
import { getDb } from '@/db';

const useStyles = makeStyles(() =>
  createStyles({
    title: { flexGrow: 1 },
    content: { overflow: 'auto' },
  }),
);

const Split: FC<RouteComponentProps<{ name: string }>> = props => {
  const classes = useStyles();
  const good = getDb('goods').find('name', props.match.params.name);

  //   const printRef = createRef<HTMLDivElement>();
  //   const [dialogVisible, setDialogVisible] = useState(false);
  //   const [imageData, setImageData] = useState('');

  if (!good) {
    return null;
  }
  return (
    <Container>
      <Header
        {...props}
        // handleCopy={() => {
        //     printRef.current &&
        //       html2canvas(printRef.current, {
        //         backgroundColor: 'white',
        //         windowWidth: printRef.current.scrollWidth,
        //         windowHeight: printRef.current.scrollHeight,
        //       }).then(canvas => {
        //         setImageData(canvas.toDataURL('image/png', 1));
        //         setDialogVisible(true);
        //       });
        // }}
      />
      <Content className={classes.content}>
        {/* <div style={{ width: 'max-content', height: 'max-content' }} ref={printRef}> */}
        <SplitChart id={good.id} {...props} />
        {/* </div> */}
      </Content>
      {/* <Dialog fullScreen open={dialogVisible} onClose={() => setDialogVisible(false)}>
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
      </Dialog> */}
    </Container>
  );
};

export default Split;
