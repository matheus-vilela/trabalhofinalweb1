import styled from 'styled-components';

interface Props {
  active?: boolean;
  voted?: boolean;
  status?: string;
  isBefore?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 100px;
  width: 400px;
  background: ${(props) =>
    props.active ? '#B23A4E' : props.isBefore ? props.theme.colors.placeholder : props.theme.colors.foreground};
  box-shadow: 0 2px 4px 0px ${(props) => props.theme.colors.black + '50'};
  border-radius: 0.5rem;
  padding: 1rem;
  gap: 1rem;

  h1 {
    font-size: 1.8rem;
    color: ${(props) => (props.active ? props.theme.colors.white : props.theme.colors.black)};
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    color: ${(props) => (props.active ? props.theme.colors.white : props.theme.colors.text)};
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 0;

      label {
        font-size: 1.2rem;
        color: ${(props) => (props.active ? props.theme.colors.white : props.theme.colors.text)};
        font-weight: 500;
      }

      span {
        font-size: 1.4rem;
        color: ${(props) => (props.active ? props.theme.colors.white : props.theme.colors.black)};
        font-weight: 700;
      }
    }
  }
`;

export const Flag = styled.div<Props>`
  display: flex;
  position: absolute;
  rotate: 10deg;
  top: 0;
  right: -5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 70px;
  height: 20px;
  background: ${(props) =>
    props.status === 'Concluido'
      ? props.theme.colors.primary
      : props.status === 'Aguardando resultado'
      ? props.theme.colors.warning
      : props.theme.colors.success};
  box-shadow: 0 2px 4px 0px ${(props) => props.theme.colors.black + '50'};
  border-radius: 0.5rem;
  z-index: 5;
  text-align: center;
  padding: 0 0.3rem;
  font-size: 1rem;
  color: ${(props) => (props.status === 'Concluido' ? props.theme.colors.white : props.theme.colors.black)};
  font-weight: 700;
`;
