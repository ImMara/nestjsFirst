import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: { String, required: true },
  description: { String, required: true },
  price: { Number, required: true },
});

export class Product {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public price: number,
  ) {}
}
