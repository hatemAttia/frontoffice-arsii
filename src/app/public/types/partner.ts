enum PartnerType{
  association = "Association",
  club = "Club",
  company = "company"
};
export interface Partner {
  address: string;
  name: string;
  contact: string;
  description: string;
  type: PartnerType;
  image: string;
}
