export interface Address {
  zone?: number;
  zipcode?: number;
  province: string;
  city: string;
  district: string;
}

export interface DataUser {
  name: string;
  age: number;
  address: Array<Address>;
}
