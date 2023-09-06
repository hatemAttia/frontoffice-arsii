export class Event {
  title: string;
  description: string;
  date: Date;
  former: string;
  urlImage: string;
  numberofParticipants: string
  location: string;
  status: boolean;
  TypeEvent: string;

  constructor() {
    this.title='';
    this.description='';
    this.date=new Date();
    this.former='';
    this.urlImage='';
    this.numberofParticipants='';
    this.location = '';
    this.status =true;
    this.TypeEvent=''
  }
}
