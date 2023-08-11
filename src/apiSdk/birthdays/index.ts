import axios from 'axios';
import queryString from 'query-string';
import { BirthdayInterface, BirthdayGetQueryInterface } from 'interfaces/birthday';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBirthdays = async (
  query?: BirthdayGetQueryInterface,
): Promise<PaginatedInterface<BirthdayInterface>> => {
  const response = await axios.get('/api/birthdays', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createBirthday = async (birthday: BirthdayInterface) => {
  const response = await axios.post('/api/birthdays', birthday);
  return response.data;
};

export const updateBirthdayById = async (id: string, birthday: BirthdayInterface) => {
  const response = await axios.put(`/api/birthdays/${id}`, birthday);
  return response.data;
};

export const getBirthdayById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/birthdays/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBirthdayById = async (id: string) => {
  const response = await axios.delete(`/api/birthdays/${id}`);
  return response.data;
};
