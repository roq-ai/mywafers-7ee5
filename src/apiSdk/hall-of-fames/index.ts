import axios from 'axios';
import queryString from 'query-string';
import { HallOfFameInterface, HallOfFameGetQueryInterface } from 'interfaces/hall-of-fame';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getHallOfFames = async (
  query?: HallOfFameGetQueryInterface,
): Promise<PaginatedInterface<HallOfFameInterface>> => {
  const response = await axios.get('/api/hall-of-fames', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createHallOfFame = async (hallOfFame: HallOfFameInterface) => {
  const response = await axios.post('/api/hall-of-fames', hallOfFame);
  return response.data;
};

export const updateHallOfFameById = async (id: string, hallOfFame: HallOfFameInterface) => {
  const response = await axios.put(`/api/hall-of-fames/${id}`, hallOfFame);
  return response.data;
};

export const getHallOfFameById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/hall-of-fames/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteHallOfFameById = async (id: string) => {
  const response = await axios.delete(`/api/hall-of-fames/${id}`);
  return response.data;
};
