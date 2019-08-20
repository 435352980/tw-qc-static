import React, { FC, useState, useMemo } from 'react';

// import { makeStyles, createStyles } from '@material-ui/styles';
import { RouteComponentProps } from 'react-router';
import { orderBy } from 'lodash';
import Header from './Header';
import GoodList from '@/components/GoodList';
import { getDb } from '@/db';
import Container from '@/components/Container';
import Content from '@/components/Content';
import FooterDrawer from '@/components/FooterDrawer';
import { useStoreState, useStoreActions } from '@/store';
import { goodAscSort, goodDescSort } from '@/util';

// const useStyles = makeStyles(() =>
//   createStyles({ root: { display: 'flex', height: '100vh', flexDirection: 'column' } }),
// );

const Good: FC<RouteComponentProps> = props => {
  // const classes = useStyles();
  const filterCat = useStoreState(state => state.good.filterCat);
  const setFilterCat = useStoreActions(actions => actions.good.setFilterCat);

  const [menuOpen, setMenuOpen] = useState(false);
  const changeFilterCat = (cat: string) => {
    setFilterCat(cat);
    setMenuOpen(false);
  };

  const list = useMemo(() => {
    return orderBy(
      getDb('goods')
        .getAll()
        .filter(({ cat = [] }) => (filterCat ? cat.includes(filterCat) : true)),
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
      <Header onMenuClick={() => setMenuOpen(true)} {...props} />
      <Content>
        <GoodList list={list} {...props} />
      </Content>
      <FooterDrawer
        anchor="bottom"
        open={menuOpen}
        // onOpen={() => setMenuOpen(true)}
        onClose={() => setMenuOpen(false)}
        onItemClick={key => changeFilterCat(key)}
      />
    </Container>
  );
};

export default Good;
