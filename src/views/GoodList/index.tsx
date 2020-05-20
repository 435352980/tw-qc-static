import React, { FC, useState, useMemo } from 'react';

// import { makeStyles, createStyles } from '@material-ui/styles';
import { RouteComponentProps } from 'react-router';
import { orderBy } from 'lodash';
import Container from '@/components/Container';
import Content from '@/components/Content';
import FooterDrawer from '@/views/FooterDrawer';
import { useStoreState, useStoreActions } from '@/store';
import { goodAscSort, goodDescSort } from './util';
import GoodList from './List';
import Header from './Header';

// const useStyles = makeStyles(() =>
//   createStyles({ root: { display: 'flex', height: '100vh', flexDirection: 'column' } }),
// );

const Good: FC<RouteComponentProps> = props => {
  const dataHelper = useStoreState(state => state.app.dataHelper);
  const { goodDB } = dataHelper;
  const filterCat = useStoreState(state => state.good.filterCat);
  const setFilterCat = useStoreActions(actions => actions.good.setFilterCat);

  const [menuOpen, setMenuOpen] = useState(false);
  const changeFilterCat = (cat: FilterCat) => {
    setFilterCat(cat);
    setMenuOpen(false);
  };

  const list = useMemo(() => {
    return orderBy(
      goodDB.raw().filter(({ cat = [] }) => (filterCat ? cat.includes(filterCat) : true)),
      [
        goodAscSort('goodType'),
        goodDescSort('stage'),
        goodDescSort('level'),
        goodDescSort('quality'),
      ],
      ['asc', 'desc', 'desc', 'desc'],
    );
  }, [filterCat]);

  return (
    <Container>
      <Header onMenuClick={() => setMenuOpen(true)} title="装备列表" {...props} />
      <Content>
        <GoodList list={list} {...props} />
      </Content>
      <FooterDrawer
        anchor="bottom"
        open={menuOpen}
        // onOpen={() => setMenuOpen(true)}
        onClose={() => setMenuOpen(false)}
        onItemClick={(key: FilterCat) => changeFilterCat(key)}
      />
    </Container>
  );
};

export default Good;
