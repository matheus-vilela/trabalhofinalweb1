/* eslint-disable react/prop-types */
import { format, isBefore } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Card, { IVote } from '../../components/card';
import Header from '../../components/header';
import { useAuth } from '../../contexts/auth';
import { api } from '../../services';
import { CardContent, Container, Content, Detail, DetailContent, OpcaoVoto } from './styles';

const Home: React.FC = () => {
  const [select, setSelect] = useState<IVote | null>();
  const [vencedor, setVencedor] = useState<{ id: string; nome: string; votos: number } | 'EMPATE' | null>(null);
  const auth = useAuth();

  useEffect(() => {
    if (select) {
      if (isBefore(new Date(select?.datafim), new Date())) {
        const vencedor = select.opcoes.sort((a, b) => b.votos - a.votos);
        if (vencedor[0].votos === vencedor[1].votos) {
          setVencedor('EMPATE');
        } else if (vencedor[0].votos > vencedor[1].votos) {
          setVencedor(vencedor[0]);
        } else {
          setVencedor(vencedor[1]);
        }
      } else {
        setVencedor(null);
      }
    } else {
      setVencedor(null);
    }
  }, [select]);

  async function handleSubmitVote(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const props = Object.fromEntries(formData);

    if (select) {
      const { data } = await api.post('/votacao/' + select.id, {
        option: props.opcao as any,
        email: auth.user.email,
      });
      console.log(data);
      setSelect(
        (prev) =>
          prev && {
            ...(prev as IVote),
            votos: [...prev.votos, auth.user.email],
          }
      );
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <CardContent>
          <h1>Votações</h1>
          {auth.list.map((item) => (
            <Card
              item={item}
              onSelect={(res) => setSelect((prev) => (prev && prev.id === res.id ? null : res))}
              key={String(item.id)}
              active={select ? select.id === item.id : false}
            />
          ))}
        </CardContent>
        <DetailContent>
          {select && (
            <>
              <h1>Detalhes</h1>
              <Detail>
                <h1>{select.titulo}</h1>
                <p>{select.descricao}</p>
                <div>
                  <div>
                    <label>Data de inicio: </label>
                    <span>{format(new Date(select.datainicio), 'dd/MM/yyyy HH:mm')}</span>
                  </div>
                  <div>
                    <label>Data de fim: </label>
                    <span>{format(new Date(select.datafim), 'dd/MM/yyyy HH:mm')}</span>
                  </div>
                </div>
                {vencedor ? (
                  <div>
                    <h2>
                      Votação encerrada!
                      <br />
                      <p>
                        {vencedor === 'EMPATE' ? (
                          <div>
                            <span style={{ paddingTop: 10, paddingBottom: 5 }}>EMPATE</span>
                            {select.opcoes
                              .sort((a, b) => b.votos - a.votos)
                              .map((item) => (
                                <OpcaoVoto key={String(item.id)}>
                                  <label htmlFor={item.nome}>
                                    {item.nome} - {item.votos}
                                  </label>
                                </OpcaoVoto>
                              ))}
                          </div>
                        ) : (
                          <div>
                            <span style={{ marginTop: '1rem' }}>Vencedor: {vencedor.nome}</span>
                            <p style={{ marginBottom: '2rem' }}>Total de votos: {vencedor.votos}</p>
                            {select.opcoes
                              .sort((a, b) => b.votos - a.votos)
                              .map((item) => (
                                <OpcaoVoto key={String(item.id)}>
                                  <label htmlFor={item.nome}>
                                    {item.nome} - {item.votos}
                                  </label>
                                </OpcaoVoto>
                              ))}
                          </div>
                        )}
                      </p>
                    </h2>
                  </div>
                ) : !select.votos.includes(auth.user.email) ? (
                  <form style={{ flexDirection: 'column' }} onSubmit={handleSubmitVote}>
                    <h2>Você ainda não votou!</h2>
                    <label>Opcões de voto: </label>
                    {select.opcoes.map((item) => (
                      <OpcaoVoto key={String(item.id)}>
                        <input type="radio" name="opcao" id={item.id} value={item.id} />
                        <label htmlFor={item.nome}>{item.nome}</label>
                      </OpcaoVoto>
                    ))}
                    <button>Votar agora</button>
                  </form>
                ) : (
                  <div>
                    <h2>
                      Você já votou!
                      <br />
                      <p>Aguardando o resultado!</p>
                    </h2>
                  </div>
                )}
              </Detail>
            </>
          )}
        </DetailContent>
      </Content>
    </Container>
  );
};

export default Home;
