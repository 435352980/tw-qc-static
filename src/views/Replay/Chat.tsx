import React, { FC, useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import W3GReplay from '@/thirdParty/w3gjs/src';
import { convertMS, readAsArrayBuffer } from '@/helper';
import useWindowSize from '@/hooks/useWindowSize';

const Chat: FC = () => {
  const [chatData, setChatData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { innerHeight } = useWindowSize();

  const resolveReplay = (file: File) => {
    const parser = new W3GReplay();
    readAsArrayBuffer(file).then(arrayBuff => {
      parser
        .parse(Buffer.from(arrayBuff))
        .then(replay => {
          const playerInfo = replay.players;
          setChatData(
            replay.chat.map(data => {
              const playerConfig = playerInfo.find(player => player.id === data.playerId);
              let color = playerConfig ? playerConfig.color || '#000' : '#000';

              if (color?.toLowerCase() === '#ffff00' || color?.toLowerCase() === '#fffc00') {
                //避免颜色无法分辨
                color = '#D6D60B';
              }
              const tempTime = convertMS(data.timeMS);

              const hours = tempTime.hours >= 10 ? tempTime.hours : `0${tempTime.hours}`;
              const minutes = tempTime.minutes >= 10 ? tempTime.minutes : `0${tempTime.minutes}`;
              const seconds = tempTime.seconds >= 10 ? tempTime.seconds : `0${tempTime.seconds}`;
              return {
                time: `${hours}:${minutes}:${seconds}`,
                player: data.playerName,
                message: data.message,
                color,
              };
            }),
          );
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    });
  };

  const onDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const onDropReplayFile = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer) {
      setLoading(true);
      const file = e.dataTransfer.files[0];
      resolveReplay(file);
    }
  };

  useEffect(() => {
    document.addEventListener('drop', onDropReplayFile);
    document.addEventListener('dragover', onDragOver);
    return () => {
      document.removeEventListener('drop', onDropReplayFile);
      document.removeEventListener('dragover', onDragOver);
    };
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <div
          style={{ height: 48, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div>
            <input
              style={{ display: 'none' }}
              id="upReplay"
              type="file"
              onChange={e => {
                setLoading(true);
                const file = e.target.files[0];
                resolveReplay(file);
              }}
            />
            <label htmlFor="upReplay">
              <Typography
                variant="h5"
                component="span"
                color="primary"
                style={{ verticalAlign: 'middle', cursor: 'pointer' }}
              >
                {loading ? 'Loading...' : '点击上传解析录像聊天记录'}
              </Typography>
            </label>
          </div>
        </div>
      </Container>
      <Container maxWidth="xl" style={{ height: innerHeight - 108, overflowY: 'auto' }}>
        {!loading &&
          chatData.map((data, index) => (
            <div key={index}>
              <Typography component="span" style={{ marginRight: 16 }}>
                {`[${data.time}]`}
              </Typography>
              <Typography
                component="span"
                variant="body1"
                style={{ color: data.color, marginRight: 16 }}
              >
                {data.player}
              </Typography>
              <Typography component="span" variant="body1" style={{ wordBreak: 'break-all' }}>
                {data.message}
              </Typography>
            </div>
          ))}
      </Container>
    </>
  );
};

export default Chat;
