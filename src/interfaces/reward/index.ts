import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RewardInterface {
  id?: string;
  user_id?: string;
  description: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface RewardGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  description?: string;
}
