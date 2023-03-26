import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';

type Props = LinkProps & {
  active: boolean;
};
type PropsSignOut = {
  active: boolean;
};

export const Container = styled.div`
  display: fixed;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.foreground};
  box-shadow: 0px 0px 15px #00000030;
  margin: 10px;
  padding: 5px 20px;
  transition: all 0.5s ease-in-out;
  z-index: 100;
  min-width: calc(100% - 2rem);
  min-height: 55px;
  overflow-x: auto;

  ::-webkit-scrollbar {
    background: ${(props) => props.theme.colors.foreground};
    height: 5px;
    border-radius: 0 0 10px 10px;
  }
`;

export const HeaderOption = styled(Link)<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.foreground};
  margin-right: 30px;
  color: ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.title)};
  text-decoration: none;
  cursor: pointer;
  gap: 0.1rem;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  svg {
    margin: 0 1.4rem;
    max-height: 25px;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: ${(props) => props.theme.font.semiBold};
    text-align: center;
  }
`;

export const SignOut = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.foreground};
  margin-right: 30px;
  color: ${(props) => props.theme.colors.title};
  text-decoration: none;
  cursor: pointer;
  gap: 0.1rem;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  svg {
    margin: 0 1.4rem;
    max-height: 25px;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: ${(props) => props.theme.font.semiBold};
    text-align: center;
  }
`;
