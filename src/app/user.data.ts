import { DataUser } from './app.entity';

export const userDataPublic: DataUser = {
  name: 'jona',
  age: 23,
  address: [
    {
      zipcode: 1,
      province: 'jakarta',
      city: 'jakarta barat',
      district: 'kembangan',
      zone: 1,
    },
    {
      zipcode: 2,
      province: 'jakarta',
      city: 'jakarta timur',
      district: 'cijantung',
      zone: 2,
    },
    {
      zipcode: 3,
      province: 'jakarta',
      city: 'jakarta utara',
      district: 'pluit',
      zone: 3,
    },
  ],
};
