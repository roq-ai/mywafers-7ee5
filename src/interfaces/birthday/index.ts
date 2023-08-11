import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BirthdayInterface {
  id?: string;
  user_id?: string;
  date: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface BirthdayGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
