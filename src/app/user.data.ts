import { DataUser } from './app.entity';

export const userDataPublic: Array<DataUser> = [
  {
    name: 'jona',
    email: 'jona321@gmail.com',
    payment: new Date(2024, 8, 15),
    status: false,
    address: {
      zipcode: 1,
      province: 'jakarta',
      city: 'jakarta barat',
    },
  },
  {
    name: 'jona2',
    email: 'jona123@gmail.com',
    payment: new Date(2024, 8, 25),
    status: false,
    address: {
      zipcode: 2,
      province: 'jakarta',
      city: 'jakarta timur',
    },
  },
];
