import React, { useCallback, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Container from '@/components/Container';
import Content from '@/components/Content';
import Intro from './Intro';
import Header from './Header';

interface DetailViewProps {
  /**
   * 物品或单位ID
   */
  id?: string;
  /**
   * 挂载位置
   */
  anchor: 'left' | 'right';
  /**
   * 显示/隐藏
   */
  show: boolean;
}

const Detail: React.FC<RouteComponentProps<{ id: string }>> = (props) => {
  const { match } = props;
  const id = match.params.id;

  const drawerRef = React.useRef<HTMLDivElement>();
  const printRef = React.useRef<HTMLDivElement>();

  const doCopy = useCallback(() => null, []);

  //切换后重置滚动
  useEffect(() => {
    if (drawerRef.current) {
      const drawerPaperNode = drawerRef.current.querySelector('#detailViewPaper');
      if (drawerPaperNode) {
        drawerPaperNode.scrollTop = 0;
      }
    }
  }, [id]);

  return (
    <Container>
      <Header title="明细" {...props} />
      <Content>
        <div>
          <div ref={printRef} style={{ marginTop: 24 }}>
            <Intro id={id} doCopy={doCopy} doExport={() => null} {...props} />
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Detail;
