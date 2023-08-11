import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AnnouncementInterface {
  id?: string;
  user_id?: string;
  content: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface AnnouncementGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  content?: string;
}
