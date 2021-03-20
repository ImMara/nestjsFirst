import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(title: string, description: string, price: number) {
    const newProduct = new this.productModel({
      title,
      description,
      price,
    });
    const result = await newProduct.save();
    return result.id as string;
  }

  // getProducts() {
  //   return this.products.slice();
  // }
  //
  // getSingleProduct(productId: string) {
  //   const product = this.findProduct(productId)[0];
  //   return { ...product };
  // }
  //
  // updateProduct(productId: string, title: string, desc: string, price: number) {
  //   const await [product, index] = this.findProduct(productId);
  //   const updatedProduct = { ...product };
  //   if (title) {
  //     updatedProduct.title = title;
  //   }
  //   if (desc) {
  //     updatedProduct.description = desc;
  //   }
  //   if (price) {
  //     updatedProduct.price = price;
  //   }
  //   // this.products[index] = updatedProduct;
  // }
  // deleteProduct(prodId: string) {
  //   const index = this.findProduct(prodId)[1];
  //   this.products.splice(index, 1);
  // }

  private async findProduct(id: string): Promise<Product> {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Could not find product');
    }
    return product;
  }
}
