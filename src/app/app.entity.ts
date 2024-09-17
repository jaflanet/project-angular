export interface Address {
  zipcode: number;
  province: string;
  city: string;
}

export interface DataUser {
  name: string;
  email: string;
  address: Address;
}
