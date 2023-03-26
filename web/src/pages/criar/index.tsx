/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useState } from 'react';
import { FaPlusCircle, FaTrash } from 'react-icons/fa';
import Header from '../../components/header';

import { ButtonSubmit, Container, Content, Form } from './styles';

const Criar: React.FC = () => {
  const [option, setOption] = useState<string[]>([]);
  const [text, setText] = useState('');
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const props = Object.fromEntries(formData);
    console.log({
      ...props,
      opcoes: option.map((item, index) => ({
        id: String(index + 1),
        nome: item,
        votos: 0,
      })),
    });
    const api = axios.create({
      baseURL: 'http://localhost:3002',
    });

    api.post('/votacao', {
      ...props,
      opcoes: option.map((item, index) => ({
        id: String(index + 1),
        nome: item,
        votos: 0,
      })),
    });

    form.reset();
    setOption([]);
  }
  return (
    <Container>
      <Header />
      <label>Criar nova votação</label>
      <Content>
        <Form onSubmit={handleSubmit}>
          <div className="item">
            <label>Título</label>
            <input type="text" name="titulo" />
          </div>
          <div className="item">
            <label>Descrição</label>
            <input type="text" name="descricao" />
          </div>
          <div className="row">
            <div className="item">
              <label>Data de inicio</label>
              <input type="datetime-local" name="datainicio" />
            </div>
            <div className="item">
              <label>Data de fim</label>
              <input type="datetime-local" name="datafim" />
            </div>
          </div>
          <div className="opcao">
            <label>Opções de voto</label>
            {option.map((item, index) => (
              <div key={String(index)}>
                <p>
                  {index + 1} - {item}
                </p>
                <button
                  onClick={() => {
                    setOption((prev) => prev.filter((a) => a !== item));
                  }}
                >
                  <FaTrash size={16} />
                </button>
              </div>
            ))}
            <label style={{ paddingTop: 10 }}>Adicione uma opção</label>
            <div>
              <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
              <div
                style={{ background: '#545454' }}
                onClick={() => {
                  console.log(text, option);
                  setOption((prev) => [...prev, String(text)]);
                  setText('');
                }}
              >
                <FaPlusCircle size={16} />
              </div>
            </div>
          </div>
          <ButtonSubmit type="submit">Criar</ButtonSubmit>
        </Form>
      </Content>
    </Container>
  );
};

export default Criar;
