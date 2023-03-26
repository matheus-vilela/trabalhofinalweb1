import { format, isBefore } from 'date-fns';
import React from 'react';
import { useAuth } from '../../contexts/auth';
import { Container, Flag } from './styles';

export type IVote = {
  id: string;
  titulo: string;
  descricao: string;
  datainicio: string;
  datafim: string;
  votos: string[];
  opcoes: {
    id: string;
    nome: string;
    votos: number;
  }[];
};

type Props = {
  item: IVote;
  onSelect: (item: IVote) => void;
  active: boolean;
};

const Card: React.FC<Props> = ({ item, onSelect, active }) => {
  const auth = useAuth();
  return (
    <Container
      onClick={() => onSelect(item)}
      active={active}
      voted={item.votos.includes(auth.user.email)}
      isBefore={isBefore(new Date(item.datafim), new Date())}
    >
      {!active && (
        <Flag
          status={
            isBefore(new Date(item.datafim), new Date())
              ? 'Concluido'
              : item.votos.includes(auth.user.email)
              ? 'Aguardando resultado'
              : 'Disponivel'
          }
        >
          {isBefore(new Date(item.datafim), new Date())
            ? 'Concluido'
            : item.votos.includes(auth.user.email)
            ? 'Aguardando resultado'
            : 'Pendente'}
        </Flag>
      )}
      <h1>{item.titulo}</h1>
      <p>{item.descricao}</p>
      <div>
        <div>
          <label>Data de inicio: </label>
          <span>{format(new Date(item.datainicio), 'dd/MM/yyyy  HH:mm:ss')}</span>
        </div>
        <div>
          <label>Data de fim: </label>
          <span>{format(new Date(item.datafim), 'dd/MM/yyyy  HH:mm:ss')}</span>
        </div>
      </div>
    </Container>
  );
};

export default Card;
