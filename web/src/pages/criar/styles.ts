import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.colors.background};

  label {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.black};
    font-weight: 700;
    margin-bottom: 1rem;
    padding: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 100px;
  width: 400px;
  background: ${(props) => props.theme.colors.foreground};
  box-shadow: 0 2px 4px 0px ${(props) => props.theme.colors.black + '50'};
  border-radius: 0.5rem;
  padding: 1rem;
  gap: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;

  .row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    label {
      font-size: 1.2rem;
      color: ${(props) => props.theme.colors.black};
      font-weight: 6500;
      margin-bottom: 0.5rem;
      padding: 0rem;
    }
    input {
      width: 100%;
      border: 1px solid ${(props) => props.theme.colors.text};
      border-radius: 0.5rem;
      padding: 0.5rem;

      &:focus {
        outline: none;
        border: 1px solid ${(props) => props.theme.colors.primary};
        & + label {
          color: ${(props) => props.theme.colors.primary};
        }
      }
    }
  }

  .opcao {
    border-top: 1px solid ${(props) => props.theme.colors.text};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    gap: 1rem;
    margin-top: 1rem;
    padding-top: 1rem;
    label {
      font-size: 1.4rem;
      color: ${(props) => props.theme.colors.black};
      font-weight: 700;
      margin-bottom: 0rem;
      padding: 0rem;
    }
    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      cursor: pointer;
      &:focus {
        outline: none;
        border: 1px solid ${(props) => props.theme.colors.primary};
        & + label {
          color: ${(props) => props.theme.colors.primary};
        }
      }

      p {
        font-size: 1.4rem;
        color: ${(props) => props.theme.colors.black};
        font-weight: 600;
      }

      input {
        width: 100%;
        border: 1px solid ${(props) => props.theme.colors.text};
        border-radius: 0.5rem;
        padding: 0.5rem;

        &:focus {
          outline: none;
          border: 1px solid ${(props) => props.theme.colors.primary};
          & + label {
            color: ${(props) => props.theme.colors.primary};
          }
        }
      }

      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        background: ${(props) => props.theme.colors.primary};
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem;
        color: ${(props) => props.theme.colors.white};
        font-size: 1.2rem;
        font-weight: 600;
        cursor: pointer;
        transition: 0.2s;
        width: 40px;
      }
    }
  }
`;

export const ButtonSubmit = styled.button`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  background: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
