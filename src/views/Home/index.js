import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import { Container, Main } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Sidebar />
      </Main>
    </Container>
  );
}

export default Home;