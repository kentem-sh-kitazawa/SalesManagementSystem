import type { AllProductsType } from "../Types/AllProductsType";
import { getDate } from "../utils/dateUtils";
import { getProfitTotal, getSoldTotal } from "../utils/totalUtils";
import type { ProductStockType } from "../Types/ProductStockType";

const TodaySalesSummary = ({
  soldProducts,
  productStocks,
  products,
}: AllProductsType) => {
  //販売日が今日のもの
  const todaySoldProducts = soldProducts.filter(
    (soldProduct) => soldProduct.salesDate === getDate()
  );

  const todayPurchaseInfo: ProductStockType[] = todaySoldProducts
    .map((todaySoldProduct) => {
      const productStock = productStocks.find(
        (productStock) => todaySoldProduct.productId === productStock.productId
      );
      return productStock;
    })
    .filter((productStock) => productStock !== undefined);

  return (
    <>
      <p>本日の販売状況</p>
      <table>
        <thead>
          <tr>
            <th>商品名</th>
            <th>仕入価格</th>
            <th>販売価格</th>
            <th>仕入日</th>
            <th>販売日</th>
            <th>販売数</th>
            <th>小計</th>
          </tr>
        </thead>
        <tbody>
          {todaySoldProducts.map((todaySoldProduct) => (
            <tr key={todaySoldProduct.id}>
              <td>
                {
                  products.find((productid) => {
                    return (
                      productid.id ===
                      productStocks.find((productStock) => {
                        return (
                          todaySoldProduct.productId === productStock.productId
                        );
                      })?.productId
                    );
                  })?.productName
                }
              </td>
              <td>
                {
                  productStocks.find(
                    (productStock) =>
                      productStock.productId === todaySoldProduct.productId
                  )?.purchasePrice
                }
              </td>
              <td>{todaySoldProduct.salePrice}</td>
              <td>
                {
                  productStocks.find(
                    (productStock) =>
                      todaySoldProduct.productId === productStock.productId
                  )?.purchaseDate
                }
              </td>
              <td>{todaySoldProduct.salesDate}</td>
              <td>{todaySoldProduct.soldQuantiry}</td>
              <td>
                {todaySoldProduct.salePrice * todaySoldProduct.soldQuantiry}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>売上合計:{getSoldTotal(todaySoldProducts)}</p>
      <p>
        利益合計:
        {getProfitTotal(todayPurchaseInfo, todaySoldProducts)}
      </p>
    </>
  );
};

export default TodaySalesSummary;
