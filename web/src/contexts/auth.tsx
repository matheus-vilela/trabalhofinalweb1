import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { IVote } from '../components/card';
import { getVotacao } from '../services';
import { IContextProps } from './types';

export interface AuthContextProps {
  user: any | null;
  setUser: React.Dispatch<any>;
  list: any[];
  setList: React.Dispatch<React.SetStateAction<any[]>>;
}
export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC<IContextProps> = ({ children }) => {
  const [user, setUser] = React.useState<any>(null);
  const [list, setList] = React.useState<IVote[]>([]);

  useEffect(() => {
    let unsubscribe: any;
    if (user) {
      getVotacao().then((data) => {
        console.log(data);
        setList(
          data
            .map((a: any) => ({ ...a, opcoes: JSON.parse(a.opcoes), votos: JSON.parse(a.votos) }))
            .sort((a: any, b: any) => new Date(b.datafim).getTime() - new Date(a.datafim).getTime())
            .sort((a: any, b: any) => a.votos.includes(user.email) - b.votos.includes(user.email))
        );
      });
      unsubscribe = setInterval(() => {
        getVotacao().then((data) => {
          setList(
            data
              .map((a: any) => ({ ...a, opcoes: JSON.parse(a.opcoes), votos: JSON.parse(a.votos) }))
              .sort((a: any, b: any) => new Date(b.datafim).getTime() - new Date(a.datafim).getTime())
              .sort((a: any, b: any) => a.votos.includes(user.email) - b.votos.includes(user.email))
          );
        });
      }, 3000);
    }

    return () => {
      clearInterval(unsubscribe);
    };
  }, [user]);

  const value = useMemo(
    () => ({
      user,
      setUser,
      list,
      setList,
    }),
    [user, list]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth(): AuthContextProps {
  const authContext = useContext(AuthContext);
  return { ...authContext };
}
