import { useNavigate } from "react-router-dom";

import type { AllProductsType } from "../Types/AllProductsType";
import { getProfitTotal, getSoldTotal } from "../utils/totalUtils";

const SalesHistoryForm = ({
  soldProducts,
  productStocks,
  products,
}: AllProductsType) => {
  const navigate = useNavigate();

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>商品名</th>
            <th>販売価格</th>
            <th>販売数</th>
            <th>小計</th>
            <th>販売日</th>
          </tr>
        </thead>
        <tbody>
          {soldProducts.map((soldProduct) => (
            <tr key={soldProduct.id}>
              <td>
                {
                  products.find((productid) => {
                    return (
                      productid.id ===
                      productStocks.find((productStock) => {
                        return soldProduct.productId === productStock.productId;
                      })?.productId
                    );
                  })?.productName
                }
              </td>
              <td>{soldProduct.salePrice}</td>
              <td>{soldProduct.soldQuantiry}</td>
              <td>{soldProduct.salePrice * soldProduct.soldQuantiry}</td>
              <td>{soldProduct.salesDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        戻る
      </button>
      <p>売上合計:{getSoldTotal(soldProducts)}</p>
      <p>
        利益合計:
        {getProfitTotal(productStocks, soldProducts)}
      </p>
    </>
  );
};

export default SalesHistoryForm;
