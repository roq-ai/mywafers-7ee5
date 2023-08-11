import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BlogInterface {
  id?: string;
  user_id?: string;
  content: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface BlogGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  content?: string;
}
