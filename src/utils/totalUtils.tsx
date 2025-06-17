import type { ProductStockType } from "../Types/ProductStockType";
import type { SoldProductType } from "../Types/SoldProductType";

export const getSoldTotal = (soldProducts: SoldProductType[]) => {
  let total = 0;
  soldProducts.forEach((soldProduct) => {
    total = soldProduct.salePrice * soldProduct.soldQuantiry + total;
  });
  return total;
};

export const getProfitTotal = (
  productStocks: ProductStockType[],
  soldProducts: SoldProductType[]
) => {
  let costTotal = 0;
  const salePurcheseInfos = soldProducts.map((soldProduct) => {
    return productStocks.find(
      (productStock) => soldProduct.productId === productStock.productId
    );
  });
  salePurcheseInfos.forEach((salePurcheseInfo) => {
    costTotal += salePurcheseInfo!.purchasePrice!;
  });
  return getSoldTotal(soldProducts) - costTotal;
};
