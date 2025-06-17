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
      </table>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        戻る
      </button>
      <p>売上合計</p>
      <p>利益合計</p>
    </>
  );
};

export default SalesHistoryForm;
