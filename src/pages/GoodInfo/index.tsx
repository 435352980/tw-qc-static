import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import Header from './Header';
import Container from '@/components/Container';
import Content from '@/components/Content';
import DetailView from '@/components/DetailView';

const GoodInfo: FC<RouteComponentProps<{ name: string }>> = props => {
  const { match } = props;
  console.log(match.params.name);
  return (
    <Container>
      <Header title="装备明细" {...props} />
      <Content>
        <DetailView {...props} />
      </Content>
    </Container>
  );
};

export default GoodInfo;
