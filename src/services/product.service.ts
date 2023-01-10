import { Http } from '../libs/http';
import { TProduct } from '../types';

class ProductService {
  private http;

  constructor() {
    this.http = new Http().getInstance();
  }

  getProducts(): Promise<TProduct[]> {
    return this.http.get('/products');
  }
}

export const productService = new ProductService();
