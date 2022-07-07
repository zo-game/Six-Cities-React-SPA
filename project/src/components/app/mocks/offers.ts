// import { nanoid } from '@reduxjs/toolkit';

export type Offer = {
  rating: number,
  name: string,
  price: number,
  countBedrooms: number,
  capacity: number,
  isPremium : boolean,
  pictures : string[],
  isActive : boolean,
  offerType : string,
  id: string,
};

const offers : Offer[] = [
  {
    rating: 4.7,
    name: 'Beautiful & luxurious studio at great location',
    price: 130,
    countBedrooms: 3,
    capacity: 4,
    isPremium: true,
    pictures : ['/img/apartment-01.jpg', 'img/room.jpg',
      'img/apartment-02.jpg', 'img/apartment-03.jpg',
      'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isActive : false,
    offerType : 'Apartment',
    id: '1',
  },
  {
    rating: 4.7,
    name: 'Studio in the center of Moscow',
    price: 100,
    countBedrooms: 2,
    capacity: 3,
    isPremium: false,
    pictures : ['/img/apartment-02.jpg'],
    isActive : false,
    offerType : 'Apartment',
    // id: nanoid(),
    id: '2',
  },
  {
    rating: 4.9,
    name: 'Great appartment in a beutifull place',
    price: 110,
    countBedrooms: 3,
    capacity: 3,
    isPremium: false,
    pictures : ['/img/apartment-03.jpg'],
    isActive : false,
    offerType : 'Apartment',
    // id: nanoid(),
    id: '3',
  },
  {
    rating: 4.2,
    name: 'Great house with a greate view',
    price: 130,
    countBedrooms: 2,
    capacity: 2,
    isPremium: true,
    pictures : ['/img/room.jpg'],
    isActive : false,
    offerType : 'House',
    // id: nanoid(),
    id: '4',
  }
];

export default offers;