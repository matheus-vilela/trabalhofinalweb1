import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding-bottom: 3rem;
  width: 100vw;
  background: ${(props) => props.theme.colors.background};
  gap: 2rem;
`;

export const Content = styled.div`
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 2rem;
  grid-template-areas: 'card detail';
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  gap: 2rem;

  /* @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:  "card" "detail";
  } */
`;

export const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: ${(props) => props.theme.colors.background};
  gap: 2rem;

  animation: fadeInFromNone 0.5s ease-out;

  @keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }

    1% {
      display: block;
      opacity: 0;
    }

    100% {
      display: block;
      opacity: 1;
    }
  }
`;

export const DetailContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: ${(props) => props.theme.colors.background};

  gap: 2rem;

  animation: fadeInFromNone 0.5s ease-out;

  @keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }

    1% {
      display: block;
      opacity: 0;
    }

    100% {
      display: block;
      opacity: 1;
    }
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 400px;
  background: ${(props) => props.theme.colors.foreground};
  box-shadow: 0 2px 4px 0px ${(props) => props.theme.colors.black + '50'};
  border-radius: 0.5rem;
  padding: 1rem;
  gap: 1rem;

  h1 {
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.black};
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.text};
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
        color: ${(props) => props.theme.colors.text};
        font-weight: 500;
      }

      span {
        font-size: 1.4rem;
        color: ${(props) => props.theme.colors.black};
        font-weight: 700;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.black};
    font-weight: 600;
    padding: 1rem 0;
    border-top: 1px solid ${(props) => props.theme.colors.text};

    input {
      border-radius: 0.5rem;
      border: 1px solid ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.text};
      font-weight: 500;
    }

    button {
      width: 100%;
      border-radius: 0.5rem;
      border: 0px solid ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};
      box-shadow: 0 2px 4px 0px ${(props) => props.theme.colors.black + '50'};
      font-weight: 700;
      font-size: 1.2rem;
      height: 40px;
    }
  }
`;

export const OpcaoVoto = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;

  input {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background};
  }

  p {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.text};
    font-weight: 500;
  }
`;
