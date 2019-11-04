import React, { FC, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { AutoSizer, List } from 'react-virtualized';
import { ListItem, Avatar, ListItemText, Typography, makeStyles } from '@material-ui/core';
import Header from './Header';
import Container from '@/components/Container';
import Content from '@/components/Content';
import localStore, { LocalRecord } from '@/util/localStore';
import { getImage, getDb } from '@/db';

const useStyles = makeStyles({
  listImage: { borderRadius: 0, width: 64, height: 64, marginRight: 8 },
});

const recordDb = localStore.get('records');

const Record: FC<RouteComponentProps> = props => {
  const classes = useStyles();
  const [list, setList] = useState(recordDb.value());
  return (
    <Container>
      <Header {...props} />
      <Content>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={64}
              overscanRowCount={20}
              rowCount={list.length}
              rowRenderer={({ index, key, style }) => {
                const record = list[index] as LocalRecord;
                return (
                  <ListItem
                    button
                    divider
                    disableGutters
                    key={key}
                    style={style}
                    onClick={() => props.history.push(`/rinfo/${record.id}`)}
                  >
                    <Avatar
                      className={classes.listImage}
                      src={getImage(
                        record.heroName
                          ? getDb('heroes').find('name', record.heroName).img
                          : 'BTNSpy',
                      )}
                    />
                    <ListItemText
                      primary={
                        <>
                          {record.playerName && (
                            <Typography variant="body1" component="span">
                              [{record.playerName}]
                            </Typography>
                          )}
                          {record.heroName && (
                            <Typography variant="body1" component="span">
                              [{record.heroName}]
                            </Typography>
                          )}
                          <Typography variant="body1" color="secondary" component="span">
                            [{record.file}.txt]
                          </Typography>
                        </>
                      }
                      secondary={`更新日期：${record.time}`}
                    />
                  </ListItem>
                );
              }}
            />
          )}
        </AutoSizer>
      </Content>
    </Container>
  );
};

export default Record;
