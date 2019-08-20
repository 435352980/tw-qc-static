import React from 'react';

import { RouteComponentProps } from 'react-router';
import BuildFromTable from './BuildFromTable';
import DropByTable from './DropByTable';
import CreateByTable from './CreateByTable';
import MakeToTable from './MakeToTable';
import { getDb } from '@/db';

const DetailTables: React.FC<{ id: string | null | undefined } & RouteComponentProps> = ({
  id,
  ...rest
}) => {
  if (!id) {
    return null;
  }
  const good = getDb('goods').find('id', id);
  return (
    <React.Fragment>
      <BuildFromTable data={good.buildFrom} {...rest} />
      <DropByTable data={good.dropFrom} {...rest} />
      <CreateByTable data={good.createFrom} {...rest} />
      <MakeToTable data={good.makeTo} {...rest} />
    </React.Fragment>
  );
};

export default DetailTables;
