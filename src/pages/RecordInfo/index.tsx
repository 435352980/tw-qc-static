import React, { FC, useState, useEffect, useCallback } from 'react';
import { RouteComponentProps } from 'react-router';
import {
  Avatar,
  Typography,
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Header from './Header';
import Container from '@/components/Container';
import Content from '@/components/Content';
import localStore, { LocalRecord } from '@/util/localStore';
import { getImage, getDb } from '@/db';

const useStyles = makeStyles({
  card: {
    // overflow: 'visible',
    boxShadow: 'none',
    // width: '100%',
    background: 'transparent',
  },
});

const recordDb = localStore.get('records');

const RecordInfo: FC<RouteComponentProps<{ id: string }>> = props => {
  const id = props.match.params.id;
  const classes = useStyles();
  const [info, setInfo] = useState<LocalRecord>();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  useEffect(() => {
    setInfo(recordDb.getById(id).value());
  }, [id]);

  const formatGoodsImage = useCallback((list: string[]) => {
    return list.map((name, index) => {
      const good = getDb('goods').find('name', name.replace(/ x[1-9][0-9]*/, ''));
      const num = (/ x([1-9][0-9]*)/.exec(name) || [])[1];
      return (
        <span key={index} style={{ position: 'relative' }}>
          <img style={{ width: 40 }} src={getImage(good.img)} />
          <span style={{ position: 'absolute', right: 0, bottom: 0, color: '#fff' }}>{num}</span>
        </span>
      );
    });
  }, []);
  return (
    <Container>
      <Header title="存档明细" {...props} />
      <Content>
        {info && (
          <Card classes={{ root: classes.card }}>
            <CardHeader
              style={{ marginBottom: 0, paddingBottom: 0 }}
              avatar={
                <img
                  src={getImage(
                    info.heroName ? getDb('heroes').find('name', info.heroName).img : 'BTNSpy',
                  )}
                />
              }
              title={
                <>
                  {info.playerName && (
                    <Typography variant="body1" component="span">
                      [{info.playerName}]{' '}
                    </Typography>
                  )}
                  {info.heroName && (
                    <Typography variant="body1" component="span">
                      [{info.heroName}]{' '}
                    </Typography>
                  )}
                  {info.level && (
                    <Typography variant="body1" component="span">
                      [{info.level}]
                    </Typography>
                  )}
                </>
              }
              subheader={info.time}
              action={
                <IconButton>
                  <DeleteIcon onClick={() => setShowDeleteDialog(true)} />
                </IconButton>
              }
            />
            <CardContent>
              {info.panel.length > 0 && (
                <>
                  <Typography variant="h6">面板物品</Typography>
                  {formatGoodsImage(info.panel)}
                </>
              )}
              {info.bag.length > 0 && (
                <>
                  <Typography variant="h6">背包物品</Typography>
                  {formatGoodsImage(info.bag)}
                </>
              )}
              {info.store.length > 0 && (
                <>
                  <Typography variant="h6">仓库物品</Typography>
                  {formatGoodsImage(info.store)}
                </>
              )}
              <Typography variant="h6">存档代码</Typography>
              {info.codes.map((code, index) => (
                <Typography key={index} variant="body1" color="primary">
                  {code}
                </Typography>
              ))}
            </CardContent>
          </Card>
        )}
      </Content>
      <Dialog open={showDeleteDialog}>
        <DialogTitle>删除确认</DialogTitle>
        <DialogContent>确认删除存档吗？ </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setShowDeleteDialog(false);
            }}
            color="primary"
            autoFocus
          >
            取消
          </Button>
          <Button
            onClick={() => {
              if (info) {
                recordDb.removeById(info.id as string).write();
              }
              setShowDeleteDialog(false);
              props.history.push('/record');
            }}
            color="primary"
          >
            确定
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default RecordInfo;
