import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: { String, required: true },
  description: { String, required: true },
  price: { Number, required: true },
});

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
}
