import React from 'react';
import { useAuth } from '../../contexts/auth';
// import GoogleLogin from 'react-google-login';

import { ButtonLoginSocial, Container } from './styles';

const Login: React.FC = () => {
  const auth = useAuth();

  return (
    <Container>
      <span className="title">PLATAFORMA DE VOTAÇÃO</span>
      <div>
        <h1>Entrar</h1>
        <p>
          Para logar no sistema, é necessário realizar login com seu email institucional da UFOP.
          <br />
          (ufop.edu.br)
        </p>
        <ButtonLoginSocial
          client_id={'80097048706-mv6io0uq4csse6lh8tr5e1olp2446som.apps.googleusercontent.com' || ''}
          scope="https://www.googleapis.com/auth/userinfo.email"
          onResolve={({ provider, data }) => {
            if (data) {
              auth.setUser(data);
            }
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
        </ButtonLoginSocial>
      </div>
    </Container>
  );
};

export default Login;
