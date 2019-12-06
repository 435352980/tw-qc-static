import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import CopyIcon from '@material-ui/icons/FileCopy';

import { RouteComponentProps } from 'react-router';
import TipPanel from '../TipPanel';
import { getDb, getImage } from '@/db';

const useStyles = makeStyles({
  card: {
    overflow: 'visible',
    boxShadow: 'none',
    width: '100%',
    background: 'transparent',
  },
  title: { cursor: 'pointer' },
  avatar: {
    cursor: 'pointer',
  },
  tip: {
    fontWeight: 400,
    backgroundImage: 'linear-gradient(150deg, #6cd0f7 0%, #f3d7d7 103%)',
    color: '#000',
    fontSize: '1.2rem',
  },
  heroLimitImg: { width: 32, height: 32 },
});

interface GoodIntroProps extends RouteComponentProps {
  id: string;
  handleCopy: Function;
}

const GoodIntro: FC<GoodIntroProps> = ({ id, handleCopy, history }) => {
  const classes = useStyles();
  if (!id) {
    return <div />;
  }
  const {
    name,
    displayName,
    img,
    level,
    limit,
    qualityString,
    desc,
    goodTypeString,
    stageDesc,
    effect = '',
    exclusive,
  } = getDb('goods').find('id', id);

  return (
    <Card classes={{ root: classes.card }}>
      <CardHeader
        avatar={
          <Avatar
            className={classes.avatar}
            src={getImage(img)}
            onClick={() => history.push(`/split/${name}`)}
          />
        }
        title={
          <span className={classes.title}>
            <Typography variant="body1" component="span">
              {name}
            </Typography>
            {stageDesc && (
              <Typography
                variant="body1"
                color="secondary"
                component="span"
              >{`[${stageDesc}]`}</Typography>
            )}
          </span>
        }
        subheader={`${level || ''} ${qualityString ? `[${qualityString}]` : ''}${
          goodTypeString ? `[${goodTypeString}]` : ''
        }`}
        action={
          <IconButton disableRipple aria-label="FileCopy" onClick={() => handleCopy()}>
            <CopyIcon />
          </IconButton>
        }
      />
      <CardContent>
        {/* {`${desc}\n${effect || ''}`.split(/\r\n|\n/).map((info, i) => (
          <Typography variant="subtitle1" key={i}>
            {info}
          </Typography>
        ))} */}
        {limit && (
          <div style={{ marginBottom: 4 }}>
            <Typography variant="subtitle1" color="secondary">
              佩戴限定
            </Typography>
            {limit.map(({ id, name, img }, index) => {
              return (
                <Tooltip
                  title={name}
                  key={index}
                  classes={{ tooltip: classes.tip }}
                  placement="top"
                >
                  <img className={classes.heroLimitImg} alt={name} src={getImage(img)} />
                </Tooltip>
              );
            })}
          </div>
        )}

        <TipPanel desc={(displayName || name) + desc + '\n|c00ffff00' + effect} />
      </CardContent>

      {exclusive && (
        <React.Fragment>
          <CardHeader title="专属" />
          <CardContent>
            {exclusive.map((exHeroInfo, index) => {
              return (
                <TipPanel
                  key={index}
                  forceMaxWidth
                  style={{ marginBottom: 8 }}
                  desc={exHeroInfo.name + '\n' + exHeroInfo.on + '\n|c00ffff00' + exHeroInfo.desc}
                />
              );
              return (
                <React.Fragment key={index}>
                  <Typography variant="subtitle1">{exHeroInfo.name}</Typography>
                  <Typography variant="subtitle1">{exHeroInfo.on}</Typography>
                  {exHeroInfo.desc.split('\r\n').map((str, i) => (
                    <Typography variant="subtitle1" key={`efinfo${i}`}>
                      {str}
                    </Typography>
                  ))}
                </React.Fragment>
              );
            })}
          </CardContent>
        </React.Fragment>
      )}
    </Card>
  );
};

export default GoodIntro;
