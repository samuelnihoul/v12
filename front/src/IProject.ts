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
  offsets: number;
  buyerPk: string;
  wallet: any;
}
