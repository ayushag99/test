import { TerminalInterface } from './TerminalInterface';
import { VehicleInterface } from './VehicleInterface';

export interface UserInterface {
  user_id: number;
  first_name: string;
  last_name: string;
  email_id: string;
  mobile_number: number;
  password: string;
  nationality: string;
  passport_number: string;
  permanent_address: string;
  Office_address: string;
  personal_identification_number: number;
  vehicle?: VehicleInterface;
  terminal?: TerminalInterface;
}
