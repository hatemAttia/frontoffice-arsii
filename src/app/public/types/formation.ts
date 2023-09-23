export interface Formation {
    id: number;
    title: string;
    description: string;
    date: Date;
    former: string;
    numberOfParticipants: BigInteger;
    location: string;
    status: boolean;
    type: string;
    active:boolean;
    image: string;
}
