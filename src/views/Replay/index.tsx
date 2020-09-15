import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Container from '@/components/Container';
import Content from '@/components/Content';
import Chat from './Chat';
import Header from './Header';

const Detail: React.FC<RouteComponentProps> = props => {
  return (
    <Container>
      <Header title="聊天记录" {...props} />
      <Content>
        <Chat {...props} />
      </Content>
    </Container>
  );
};

export default Detail;
