import React from 'react';
import { IconType } from 'react-icons';
import { FaCheckCircle, FaPlusCircle, FaSignOutAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';

import { Container, HeaderOption, SignOut } from './styles';

export type IHeaderOption = {
  label: string;
  path: string;
  icon?: IconType;
};

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const { setUser } = useAuth();
  return (
    <Container>
      <HeaderOption key={'votacao'} to={'/'} active={pathname === '/'}>
        <FaCheckCircle size={20} />
        <h1>Votações</h1>
      </HeaderOption>
      {/* <HeaderOption key={'encerradas'} to={'/encerradas'} active={pathname === '/encerradas'}>
        <FaCheckCircle size={20} />
        <h1>Votações em aberto</h1>
      </HeaderOption> */}
      <HeaderOption key={'criar'} to={'/criar'} active={pathname === '/criar'}>
        <FaPlusCircle size={20} />
        <h1>Criar</h1>
      </HeaderOption>
      <SignOut onClick={() => setUser(null)}>
        <FaSignOutAlt size={20} />
        <h1>Sair</h1>
      </SignOut>
    </Container>
  );
};

export default Header;
