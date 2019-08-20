import React, { FC, useMemo } from 'react';
import { RouteComponentProps } from 'react-router';
import { orderBy } from 'lodash';
import Header from './Header';
import Container from '@/components/Container';
import Content from '@/components/Content';
import { getDb } from '@/db';
import { useStoreState } from '@/store';
import GoodList from '@/components/GoodList';
import { goodAscSort, goodDescSort } from '@/util';

const Search: FC<RouteComponentProps> = props => {
  const searchText = useStoreState(state => state.search.searchText);
  const list = useMemo(
    () =>
      !searchText
        ? []
        : orderBy(
            getDb('goods').filter(good => good.name.includes(searchText)),
            [
              goodAscSort('goodType'),
              goodDescSort('stage'),
              goodDescSort('level'),
              goodDescSort('quality'),
            ],
            ['asc', 'desc', 'desc', 'desc'],
          ),
    [searchText],
  );
  return (
    <Container>
      <Header {...props} />
      <Content>
        <GoodList list={list} {...props} />
      </Content>
    </Container>
  );
};

export default Search;
