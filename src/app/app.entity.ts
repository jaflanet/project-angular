export interface Address {
  zipcode: number;
  province: string;
  city: string;
}

export interface DataUser {
  name: string;
  email: string;
  payment: Date;
  address: Address;
  status?: boolean;
}
