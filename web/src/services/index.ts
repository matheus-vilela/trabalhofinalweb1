import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3002',
  timeout: 300,
});

export const getVotacao = async () => {
  const { data } = await api.get('/votacao');
  return data;
};
