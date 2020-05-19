import React, { FC } from 'react';

import { FixedSizeList as List } from 'react-window';
import { Avatar, ListItem, ListItemText, Typography } from '@material-ui/core';

import { RouteComponentProps } from 'react-router';
import styled from '@emotion/styled';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Good } from '@/dataHelper/types';
import { useStoreState } from '@/store';
import { getGoodTypeString } from '@/helper';

const ListImage = styled(Avatar)`
  border-radius: 0;
  width: 64px;
  height: 64px;
  margin-right: 8px;
`;

interface GoodListProps extends RouteComponentProps {
  list: Good[];
}

const GoodList: FC<GoodListProps> = ({ list, history }) => {
  const dataHelper = useStoreState((state) => state.app.dataHelper);
  const local = useStoreState((state) => state.app.local);
  return (
    <AutoSizer>
      {({ width, height }) => (
        <List
          width={width}
          height={height}
          itemSize={64}
          overscanCount={20}
          itemCount={list.length}
        >
          {({ index, style }) => {
            const good = list[index];
            const { id, name, goodType, level, quality, stage } = good;
            return (
              <ListItem
                button
                divider
                disableGutters
                key={index}
                style={style}
                onClick={() => history.push(`/detail/${id}`)}
              >
                <ListImage src={good.imgData || dataHelper.getImgData()} />
                <ListItemText
                  primary={
                    <>
                      <Typography variant="body1">
                        {name}
                        {stage && (
                          <Typography variant="body1" color="secondary" component="span">
                            {local.common.stages[stage]}
                          </Typography>
                        )}
                      </Typography>
                    </>
                  }
                  secondary={
                    <>
                      {level || ''}
                      {getGoodTypeString(goodType) && `[${getGoodTypeString(goodType)}]`}
                      {local.common.qualities[quality] || ''}
                    </>
                  }
                />
              </ListItem>
            );
          }}
        </List>
      )}
    </AutoSizer>
  );
};

export default GoodList;
