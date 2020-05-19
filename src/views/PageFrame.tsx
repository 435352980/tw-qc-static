import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GoodList from '@/views/GoodList';
import Detail from '@/views/Detail';
import Search from '@/views/Search';
// import Scan from './Scan';
// import Search from './Search';
// import GoodInfo from './GoodInfo';
// import UnitInfo from './UnitInfo';
// import Split from './Split';
// import Record from './Record';
// import RecordInfo from './RecordInfo';

const PageFrame = () => {
  return (
    <Switch>
      <Route path="/" exact component={GoodList} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/search" component={Search} />
      {/* <Route path="/scan" component={Scan} />
      <Route path="/search" component={Search} />
      <Route path="/ginfo/:name" component={GoodInfo} />
      <Route path="/uinfo/:name" component={UnitInfo} />
      <Route path="/split/:name" component={Split} />
      <Route path="/record" component={Record} />
      <Route path="/rinfo/:id" component={RecordInfo} />
      <Route component={Good} /> */}
    </Switch>
  );
};

export default PageFrame;
