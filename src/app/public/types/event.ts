export interface Event {
  id: number;
  title: string;
  description: string;
  date: Date;
  formateur: string;
  number_of_participants: number;
  max_of_participants: number;
  location: string;
  status: boolean;
  type: string;
  is_activity: boolean;
  image: string;
  partner_id: number;
}
