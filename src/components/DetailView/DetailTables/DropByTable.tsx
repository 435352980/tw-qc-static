import React from 'react';
import { CardHeader, CardContent } from '@material-ui/core';
import ReactTable, { Column } from 'react-table';
import ReactTooltip from 'react-tooltip';
import { RouteComponentProps } from 'react-router';
import tableConfig from './tableConfig';
import SimpleCell from './SimpleCell';
import ImageCell from './ImageCell';

const DropFromTable: React.FC<{ data: DropFrom[] | null | undefined } & RouteComponentProps> = ({
  data,
  history,
}) => {
  if (!data) {
    return <div />;
  }

  const columns: Column<DropFrom>[] = [
    {
      Header: <SimpleCell>图片</SimpleCell>,
      accessor: 'img',
      Cell: row => <ImageCell {...row.original} cursor={false} />,
      width: 48,
    },
    {
      Header: <SimpleCell>名称</SimpleCell>,
      accessor: 'name',
      Cell: row => (
        <SimpleCell
          pointer
          data-for="dropByTip"
          data-tip={row.value}
          onDoubleClick={() => {
            ReactTooltip.hide();
            history.push(`/uinfo/${row.value}`);
          }}
        >
          {row.value}
        </SimpleCell>
      ),
      maxWidth: 240,
    },
    {
      Header: <SimpleCell>概率</SimpleCell>,
      accessor: 'desc',
      Cell: row => (
        <SimpleCell data-for="dropByTip" data-tip={row.value}>
          {row.value}
        </SimpleCell>
      ),
      // width: 120
    },
  ];

  return (
    <React.Fragment>
      <CardHeader title="获取方式(掉落)" />
      <CardContent>
        <ReactTable {...tableConfig} pageSize={data.length} columns={columns} data={data} />
      </CardContent>
      <ReactTooltip id="dropByTip" type="info" effect="solid" place="top" />
    </React.Fragment>
  );
};

export default DropFromTable;
