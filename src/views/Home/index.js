import React, { useEffect, useState } from 'react';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import { Container, Main } from './styles';

function Home() {
  const [menuToggle, setMenuToggle] = useState(true);

  return (
    <Container>
      <Header setMenuToggle={setMenuToggle} menuToggle={menuToggle} />
      <Main>
        <Sidebar showSidebarExtend={menuToggle} />
        <Content />
      </Main>
    </Container>
  );
}

export default Home;