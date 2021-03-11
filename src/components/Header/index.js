import React from 'react';

import { Container, Navbar, Left, Middle, Right } from './styles';

import Logo from '../../assets/logo.png';

import { AiOutlineSearch, AiFillVideoCamera } from 'react-icons/ai';
import { FaMicrophone } from 'react-icons/fa';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';

function Header(props) {

  function menuToggle() {
    props.setMenuToggle(!props.menuToggle);
  }

  return (
    <Container>
      <Navbar>
        <Left>
          <div className="menu-toggle" onClick={menuToggle}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <img src={Logo} />
        </Left>

        <Middle>
          <div className="inputGroup">
            <input type="text" />
            <button>
              <AiOutlineSearch size={18} color="#777" />
            </button>
          </div>

          <FaMicrophone size={20} color="#555" style={{
            margin: '0 1.5rem'
          }} />
        </Middle>

        <Right>
          <AiFillVideoCamera size={22} color="#555" style={{
            margin: '0 1.5rem'
          }} />
          <BsFillGrid3X3GapFill size={18} color="#555" style={{
            margin: '0 1.5rem'
          }} />
          <IoMdNotifications size={22} color="#555" style={{
            margin: '0 1.5rem'
          }} />

          <div className="profile">

          </div>
        </Right>
      </Navbar>
    </Container>
  );
}

export default Header;