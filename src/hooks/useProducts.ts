import { useState } from 'react';
import { productService } from '../services';
import { FilterEnum, TProduct } from '../types';

type TReturn = {
  error?: string;
  isLoading: boolean;
  products: TProduct[];
  getProducts: (status?: FilterEnum) => void;
  totalPoints: number;
};

export const useProducts = (): TReturn => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [error, setError] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [totalPoints, setTotalPoints] = useState<number>(0);

  const getProducts = async (status?: FilterEnum) => {
    try {
      setLoading(true);
      setProducts([]);

      let productList: Array<TProduct> = [];
      productList = await productService.getProducts();

      if (FilterEnum.earned === status) {
        productList = productList.filter((item) => !item.is_redemption);
      } else if (FilterEnum.redeemed === status) {
        productList = productList.filter((item) => item.is_redemption);
      }

      if (productList.length) {
        let acum = 0;
        for (const product of productList) {
          if (product.is_redemption) {
            acum -= product.points;
          }
          acum += product.points;
        }
        setTotalPoints(acum);
      }

      setProducts(productList);
      setLoading(false);
    } catch (e) {
      setError('errors.getProducts');
      setLoading(false);
    }
  };

  return { error, isLoading, products, getProducts, totalPoints };
};
