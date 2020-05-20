import React, { FC, useMemo } from 'react';
import { RouteComponentProps } from 'react-router';
import { orderBy } from 'lodash';
import Container from '@/components/Container';
import Content from '@/components/Content';
import { useStoreState } from '@/store';
import GoodList from '@/views/GoodList/List';
import { goodAscSort, goodDescSort } from './util';
import Header from './Header';

const Search: FC<RouteComponentProps> = props => {
  const dataHelper = useStoreState(state => state.app.dataHelper);
  const { goodDB } = dataHelper;
  const searchText = useStoreState(state => state.search.searchText);
  const list = useMemo(
    () =>
      !searchText
        ? []
        : orderBy(
            goodDB.raw().filter(good => good.name.includes(searchText)),
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
