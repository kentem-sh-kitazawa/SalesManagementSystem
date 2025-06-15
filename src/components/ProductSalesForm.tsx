import { useNavigate } from "react-router-dom";
import type { ProductStockType } from "../Types/ProductStockType";
import type { Dispatch, SetStateAction } from "react";
import type { SoldProductType } from "../Types/SoldProductType";

type Props = {
  productStocks: ProductStockType[];
  setProductStocks: Dispatch<SetStateAction<ProductStockType[]>>;
  setsoldProducts: Dispatch<SetStateAction<SoldProductType[]>>;
};

const ProductSalesForm = ({
  productStocks,
  setProductStocks,
  setsoldProducts,
}: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      <label>
        商品
        <select>
          <option>a</option>
        </select>
      </label>
      <label>
        販売数
        <input type="number"></input>
      </label>
      <p>販売日</p>
      <button>追加</button>
      <p>カート</p>
      <table>
        <tr>
          <th>商品名</th>
          <th>個数</th>
        </tr>
        <tr>
          <td>aaa</td>
        </tr>
      </table>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        販売
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        キャンセル
      </button>
    </div>
  );
  //在庫がなかったときにアラート
};

export default ProductSalesForm;
