import React from 'react';

import { Container } from './styles';

import { IoMdHome } from 'react-icons/io';
import { AiFillFire, AiOutlinePlaySquare, AiFillLike } from 'react-icons/ai';
import { BsFillCollectionPlayFill, BsCollectionPlay } from 'react-icons/bs';
import { FaHistory } from 'react-icons/fa';
import { MdWatchLater } from 'react-icons/md';

function Sidebar() {
  return (
    <Container>
      <div className="wrapper">
        <div className="wrapper-content">
          <IoMdHome size={22} color="#555" style={{ marginLeft: '2rem' }} />
          <span>Início</span>
        </div>

        <div className="wrapper-content">
          <AiFillFire size={22} color="#555" style={{ marginLeft: '2rem' }} />
          <span>Em alta</span>
        </div>

        <div className="wrapper-content">
          <BsFillCollectionPlayFill size={22} color="#555" style={{ marginLeft: '2rem' }} />
          <span>Inscrições</span>
        </div>
      </div>

      <div className="wrapper">
        <div className="wrapper-content">
          <BsCollectionPlay size={22} color="#555" style={{ marginLeft: '2rem' }} />
          <span>Biblioteca</span>
        </div>

        <div className="wrapper-content">
          <FaHistory size={22} color="#555" style={{ marginLeft: '2rem' }} />
          <span>Histórico</span>
        </div>

        <div className="wrapper-content">
          <AiOutlinePlaySquare size={22} color="#555" style={{ marginLeft: '2rem' }} />
          <span>Seus vídeos</span>
        </div>

        <div className="wrapper-content">
          <MdWatchLater size={22} color="#555" style={{ marginLeft: '2rem' }} />
          <span>Assistir mais tarde</span>
        </div>

        <div className="wrapper-content">
          <AiFillLike size={22} color="#555" style={{ marginLeft: '2rem' }} />
          <span>Vídeos marcados co...</span>
        </div>
      </div>
    </Container>
  );
}

export default Sidebar;