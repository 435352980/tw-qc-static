import React from 'react';
import { CardHeader, CardContent } from '@material-ui/core';

import ReactTable, { Column } from 'react-table';
import { orderBy } from 'lodash';
import ReactTooltip from 'react-tooltip';
import { RouteComponentProps } from 'react-router';
import tableConfig from './tableConfig';
import SimpleCell from './SimpleCell';
import ImageCell from './ImageCell';

const BuildFromTable: React.FC<{ data: BuildFrom[] | undefined | null } & RouteComponentProps> = ({
  data,
  history,
}) => {
  if (!data) {
    return <div />;
  }

  const columns: Column<BuildFrom>[] = [
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
          data-for="buildFromTip"
          data-tip={row.value}
          onDoubleClick={() => {
            ReactTooltip.hide();
            history.push(`/ginfo/${row.value}`);
          }}
        >
          {row.value}
        </SimpleCell>
      ),
      maxWidth: 240,
    },
    {
      Header: <SimpleCell>关联BOSS</SimpleCell>,
      accessor: 'dropFrom',
      Cell: row =>
        row.value
          ? (row.value as DropFrom[]).map(dp => {
              const text = dp.name + (row.original.chanceOnName ? `(${dp.desc})` : '');
              return (
                <SimpleCell
                  pointer
                  key={dp.id}
                  data-for="buildFromTip"
                  data-tip={text}
                  onDoubleClick={() => {
                    ReactTooltip.hide();
                    history.push(`/uinfo/${dp.name}`);
                  }}
                >
                  {text}
                </SimpleCell>
              );
            })
          : null,
      // width: 120
    },
    {
      Header: <SimpleCell>概率/数量</SimpleCell>,
      accessor: 'dropFrom',
      Cell: row => {
        if (row.value && !row.original.chanceOnName) {
          return (row.value as DropFrom[]).map(dp => {
            const text = dp.desc + (row.original.choose ? '(可选)' : '');
            return (
              <SimpleCell key={dp.id} data-for="buildFromTip" data-tip={text}>
                {text}
              </SimpleCell>
            );
          });
        } else {
          const text = row.original.num + (row.original.choose ? '(可选)' : '');
          return (
            <SimpleCell data-for="buildFromTip" data-tip={text}>
              {text}
            </SimpleCell>
          );
        }
      },

      // minWidth: 120
    },
  ];

  return (
    <React.Fragment>
      <CardHeader title="获取方式(锻造)" />
      <CardContent>
        <ReactTable
          {...tableConfig}
          pageSize={data.length}
          columns={columns}
          data={orderBy(data, ['choose'], ['asc'])}
        />
      </CardContent>
      <ReactTooltip id="buildFromTip" type="info" effect="solid" place="top" />
    </React.Fragment>
  );
};

export default BuildFromTable;
