import type { Producttype } from "./Products";
import type { ProductStockType } from "./ProductStockType";
import type { SoldProductType } from "./SoldProductType";

export type AllProductsType = {
  soldProducts: SoldProductType[];
  productStocks: ProductStockType[];
  products: Producttype[];
};
