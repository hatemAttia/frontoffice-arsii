enum PartnerType{
  association = "Association",
  club = "Club",
  company = "company"
};
export class Partner {
  address?: string;
  name?: string;
  contact?: string;
  description?: string;
  type?: PartnerType;
  image?: string;

}
