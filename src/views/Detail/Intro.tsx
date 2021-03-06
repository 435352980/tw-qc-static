import React, { FC, useCallback } from 'react';
import { CardHeader, CardContent, Typography, Avatar } from '@material-ui/core';
import { useStoreActions, useStoreState } from '@/store';
import TipPanel from '@/components/GamePanel';
import IconImage from '@/components/IconImage';
import styled from '@emotion/styled';
import { Good, Unit, ObjDisplayInfo } from '@/dataHelper/types';
import CyanTooltip from '@/components/CyanTooltip';
import DataHelper from '@/dataHelper';
import { RouteComponentProps } from 'react-router-dom';
import BossInfoPanel from './BossInfoPanel';
import GoodInfoPanel from './GoodInfoPanel';

const ObjAvator = styled(Avatar)<{ size?: number }>`
  ${({ size }) => (size ? `width:${size}px;height:${size}px;` : '')}
  cursor: pointer;
`;

const LimitContent = styled.div`
  max-width: 560px;
  margin-bottom: 4px;
`;

interface IntroProps {
  id: string;
  doCopy: (name: string) => void;
  doExport: (name: string) => void;
}

const Intro: FC<IntroProps & RouteComponentProps> = ({ id, doCopy, doExport, history }) => {
  const local = useStoreState(state => state.app.local);
  const dataHelper = useStoreState(state => state.app.dataHelper);

  const [data, type] = dataHelper.getObjAndTypeById(id);
  const handleCopy = useCallback(() => doCopy(data.name), [data.name, doCopy]);
  const handleExport = useCallback(() => doExport(data.name), [data.name, doExport]);

  const handleImgClick = useCallback(({ id }: ObjDisplayInfo) => history.push(`/detail/${id}`), []);

  if (!id) {
    return <div />;
  }

  return (
    <>
      <CardHeader
        avatar={
          <ObjAvator
            size={40}
            src={data.imgData}
            onClick={() => {
              console.log('aaa');
              handleCopy();
            }}
            onContextMenu={handleExport}
          />
        }
        title={
          <Typography variant="body1">
            {data.name}
            {/* 物品与BOSS拥有阶段 */}
            {type === 'good' && data.stage && (
              <Typography variant="body1" component="span" color="secondary">
                {local.common.stages[data.stage]}
              </Typography>
            )}
          </Typography>
        }
        subheader={
          <>
            {type === 'good' &&
              `${data.level || ''} ${
                local.common.qualities[data.quality] ? local.common.qualities[data.quality] : ''
              }`}
            {type === 'unit' && (
              <Typography variant="body1" component="span" color="secondary">
                {local.common.stages[data.stage]}
              </Typography>
            )}
            {type === 'hero' && local.common.unit}
          </>
        }
      />
      <CardContent>
        {/* 限定信息 */}
        {data.limitHeroes && (
          <LimitContent>
            <Typography variant="subtitle1" color="secondary">
              佩戴限定
            </Typography>
            {data.limitHeroes.map(({ name, imgData }, index) => {
              return (
                <CyanTooltip key={index} title={name} placement="top">
                  <IconImage size={40} src={imgData} />
                </CyanTooltip>
              );
            })}
          </LimitContent>
        )}
        {/* 物品说明 */}
        {type === 'good' && (
          <TipPanel
            style={{ fontSize: '1rem' }}
            desc={
              (data.displayName || data.name) + data.desc + '\n|c00ffff00' + (data.effect || '')
            }
          />
        )}
        {/* 装备关联 */}
        <GoodInfoPanel
          local={local}
          data={data as Good}
          dataHelper={dataHelper as DataHelper}
          handleImgClick={handleImgClick}
          handleImgContextMenu={() => null}
        />
        {/* Boss关联 */}
        {type === 'unit' && (
          <BossInfoPanel
            local={local}
            data={data as Unit}
            dataHelper={dataHelper as DataHelper}
            handleImgClick={handleImgClick}
            handleImgContextMenu={() => null}
          />
        )}
      </CardContent>
    </>
  );
};

export default Intro;
