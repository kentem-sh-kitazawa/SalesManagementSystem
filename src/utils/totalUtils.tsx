import type { ProductStockType } from "../Types/ProductStockType";
import type { SoldProductType } from "../Types/SoldProductType";

export const getSoldTotal = (soldProducts: SoldProductType[]) => {
  let total = 0;
  soldProducts.forEach((soldProduct) => {
    total = soldProduct.salePrice * soldProduct.soldQuantiry + total;
  });
  return total;
};

export const getPurchaseTotal = (productStocks: ProductStockType[]) => {
  let total = 0;
  productStocks.forEach((productStock) => {
    total = productStock.purchasePrice ?? 0 + total;
  });
  return total;
};
