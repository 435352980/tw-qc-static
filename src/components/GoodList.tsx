import React, { FC } from 'react';

import { AutoSizer, List } from 'react-virtualized';
import { Avatar, ListItem, ListItemText, Typography } from '@material-ui/core';

import { makeStyles, createStyles } from '@material-ui/styles';
import { RouteComponentProps } from 'react-router';
import { getImage } from '@/db';

const useStyles = makeStyles(() =>
  createStyles({
    listImage: { borderRadius: 0, width: 64, height: 64, marginRight: 8 },
  }),
);

interface GoodListProps extends RouteComponentProps {
  list: Good[];
}

const GoodList: FC<GoodListProps> = ({ list, history }) => {
  const classes = useStyles();
  return (
    <AutoSizer>
      {({ width, height }) => (
        <List
          width={width}
          height={height}
          rowHeight={64}
          overscanRowCount={20}
          rowCount={list.length}
          rowRenderer={({ index, key, style }) => {
            const good = list[index];
            return (
              <ListItem
                button
                divider
                disableGutters
                key={key}
                style={style}
                onClick={() => history.push(`/ginfo/${good.name}`)}
              >
                <Avatar className={classes.listImage} src={getImage(good.img || 'BTNSpy')} />
                <ListItemText
                  primary={
                    <>
                      <Typography variant="body1">
                        {good.name}
                        {good.stageDesc && (
                          <Typography
                            variant="body1"
                            color="secondary"
                            component="span"
                          >{`[${good.stageDesc}]`}</Typography>
                        )}
                      </Typography>
                    </>
                  }
                  secondary={
                    <>
                      {good.level ? good.level : null}
                      {good.goodTypeString ? `[${good.goodTypeString}]` : null}
                      {good.qualityString ? `[${good.qualityString}]` : null}
                    </>
                  }
                />
              </ListItem>
            );
          }}
        />
      )}
    </AutoSizer>
  );
};

export default GoodList;
