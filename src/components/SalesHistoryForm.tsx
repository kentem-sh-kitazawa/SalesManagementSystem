import { useNavigate } from "react-router-dom";
import type { SoldProductType } from "../Types/SoldProductType";
import type { ProductStockType } from "../Types/ProductStockType";
import type { Producttype } from "../Types/Products";

type Props = {
  soldProducts: SoldProductType[];
  productStocks: ProductStockType[];
  products: Producttype[];
};

const SalesHistoryForm = ({ soldProducts, productStocks, products }: Props) => {
  const navigate = useNavigate();

  const getSoldTotal = () => {
    let total = 0;
    soldProducts.forEach((soldProduct) => {
      total = soldProduct.salePrice * soldProduct.soldQuantiry + total;
    });
    return total;
  };

  const getPurchaseTotal = () => {
    let total = 0;
    productStocks.forEach((productStock) => {
      total = productStock.purchasePrice ?? 0 + total;
    });
    return total;
  };

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
      <p>売上合計:{getSoldTotal()}</p>
      <p>利益合計:{getSoldTotal() - getPurchaseTotal()}</p>
    </>
  );
};

export default SalesHistoryForm;
