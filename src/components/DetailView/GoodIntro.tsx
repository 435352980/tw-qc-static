import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Typography, Avatar, IconButton } from '@material-ui/core';
import CopyIcon from '@material-ui/icons/FileCopy';

import { RouteComponentProps } from 'react-router';
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
    img,
    level,
    qualityString,
    desc,
    goodTypeString,
    stageDesc,
    effect,
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
        {`${desc}\n${effect || ''}`.split(/\r\n|\n/).map((info, i) => (
          <Typography variant="subtitle1" key={i}>
            {info}
          </Typography>
        ))}
      </CardContent>

      {exclusive && (
        <React.Fragment>
          <CardHeader title="专属" />
          <CardContent>
            {exclusive.map((exHeroInfo, index) => {
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
