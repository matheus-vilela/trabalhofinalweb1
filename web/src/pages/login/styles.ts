import { LoginSocialGoogle } from 'reactjs-social-login';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.colors.background};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.foreground};
    box-shadow: 0 2px 10px 0px ${(props) => props.theme.colors.black + '50'};
    padding: 1rem;
    border-radius: 0.5rem;

    h1 {
      font-size: 2.4rem;
      font-weight: 700;
      color: ${(props) => props.theme.colors.black};
      text-align: center;
    }

    p {
      font-size: 1.4rem;
      font-weight: 700;
      color: ${(props) => props.theme.colors.black};
      text-align: center;
      width: 300px;
      padding: 1rem 0;
    }
  }
`;

export const ButtonLoginSocial = styled(LoginSocialGoogle)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row !important;
  border-radius: 50% !important;
  width: 90px !important;
  border: 2px solid ${(props) => props.theme.colors.primary} !important;
  box-shadow: 0 3px 6px 1px ${(props) => props.theme.colors.shadow} !important;
  margin-top: 1rem;
  cursor: pointer;
  transition: 0.2s;
  /* background-color: ${(props) => props.theme.colors.primary} !important; */
`;
