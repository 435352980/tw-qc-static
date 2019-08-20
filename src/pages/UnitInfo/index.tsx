import React, { useEffect, useState, createRef, FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Dialog,
  IconButton,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CopyIcon from '@material-ui/icons/FileCopy';
import ReactTable, { Column } from 'react-table';
// import { useActions } from 'easy-peasy';
import ReactTooltip from 'react-tooltip';
import html2canvas from 'html2canvas';
import { RouteComponentProps } from 'react-router';
import { TypographyProps } from '@material-ui/core/Typography';
import Header from './Header';
import { getDb, getImage } from '@/db';
import Container from '@/components/Container';
import Content from '@/components/Content';

const useStyles = makeStyles({
  title: { flexGrow: 1 },
  card: {
    overflow: 'visible',
    boxShadow: 'none',
    width: '100%',
    background: 'transparent',
  },
  avatar: {},
  cursorPointer: { cursor: 'pointer' },
  cursorDefault: { cursor: 'default' },
  img: { width: 40, height: 40 },
});
const tableConfig = {
  // className: '-striped -highlight',
  // className: '-highlight',
  // style: { width: 680 }, // 683
  resizable: false,
  getTdProps: () => ({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
  }),
  showPagination: false,
  sortable: false,
  NoDataComponent: () => null,
};

const UnitInfo: FC<RouteComponentProps<{ name: string }>> = props => {
  const unit = getDb('units').find('name', props.match.params.name) || {};
  const { name, img, drop = [] } = unit;
  const push = props.history.push;
  const classes = useStyles();
  const printRef = createRef<HTMLDivElement>();
  const [dialogVisible, setDialogVisible] = useState(false);
  const [imageData, setImageData] = useState('');

  useEffect(() => {
    document.documentElement.scrollTop = 0;

    document.body.scrollTop = 0;
  }, [props.match.params.name]);

  if (!unit) {
    return <div />;
  }

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

  const columns: Column<BossDrop>[] = [
    {
      Header: <SimpleCell>图片</SimpleCell>,
      accessor: 'img',
      Cell: row => <img className={classes.img} src={getImage(row.value)} />,
      width: 48,
    },
    {
      Header: <SimpleCell>名称</SimpleCell>,
      accessor: 'name',
      Cell: row => (
        <SimpleCell
          pointer
          data-for="bossDropTip"
          data-tip={row.value}
          onDoubleClick={() => {
            ReactTooltip.hide();
            push(`/ginfo/${row.value}`);
          }}
        >
          {row.value}
        </SimpleCell>
      ),
      maxWidth: 240,
    },
    {
      Header: <SimpleCell>概率</SimpleCell>,
      accessor: 'desc',
      Cell: row => (
        <SimpleCell
          data-for="bossDropTip"
          onClick={() => ReactTooltip.rebuild()}
          data-tip={row.value}
        >
          {row.value}
        </SimpleCell>
      ),
    },
  ];
  return (
    <Container>
      <Header {...props} />
      <Content>
        <div ref={printRef}>
          <Card classes={{ root: classes.card }}>
            <CardHeader
              avatar={<Avatar className={classes.avatar} src={getImage(img)} />}
              title={<span style={{ cursor: 'pointer' }}>{name}</span>}
              subheader="单位"
              action={
                <IconButton
                  disableRipple
                  aria-label="FileCopy"
                  onClick={() =>
                    printRef.current &&
                    html2canvas(printRef.current).then(canvas => {
                      setImageData(canvas.toDataURL('image/png'));
                      setDialogVisible(true);
                    })
                  }
                >
                  <CopyIcon />
                </IconButton>
              }
            />
          </Card>
          <CardHeader title="掉落物品" />
          <CardContent>
            <ReactTable {...tableConfig} pageSize={drop.length} columns={columns} data={drop} />
          </CardContent>
          <ReactTooltip id="bossDropTip" type="info" effect="solid" place="top" />
          <Dialog fullScreen open={dialogVisible} onClose={() => setDialogVisible(false)}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" align="center" className={classes.title}>
                  {APP_NAME}
                </Typography>
                <IconButton
                  color="inherit"
                  onClick={() => setDialogVisible(false)}
                  aria-label="Close"
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <img style={{ width: '100%' }} src={imageData || getImage('BTNSpy')} />
          </Dialog>
        </div>
      </Content>
    </Container>
  );
};

export default UnitInfo;
