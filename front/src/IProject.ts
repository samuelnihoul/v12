export interface IProject {
  name: string;
  number: string;
  price: string;
  address: string;
  owner: string;
  image: string;
  description: string;
}

export interface IBuyDto {
  buyerPk: any;
  offsets: number;
  wallet: any;
}
