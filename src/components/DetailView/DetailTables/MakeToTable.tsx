import React from 'react';
import { CardHeader, CardContent } from '@material-ui/core';
import ReactTable, { Column } from 'react-table';
import ReactTooltip from 'react-tooltip';
import { RouteComponentProps } from 'react-router';
import tableConfig from './tableConfig';
import SimpleCell from './SimpleCell';
import ImageCell from './ImageCell';

const MakeToTable: React.FC<{ data: MakeTo[] | null | undefined } & RouteComponentProps> = ({
  data,
  history,
}) => {
  if (!data) {
    return <div />;
  }

  const columns: Column<MakeTo>[] = [
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
          data-for="makeToTip"
          data-tip={row.value}
          onDoubleClick={() => {
            ReactTooltip.hide();
            history.push(`/ginfo/${row.value}`);
          }}
        >
          {row.value}
        </SimpleCell>
      ),
    },
  ];

  return (
    <React.Fragment>
      <CardHeader title="装备进阶" />
      <CardContent>
        <ReactTable {...tableConfig} pageSize={data.length} columns={columns} data={data} />
      </CardContent>
      <ReactTooltip id="makeToTip" type="info" effect="solid" place="top" />
    </React.Fragment>
  );
};

export default MakeToTable;
