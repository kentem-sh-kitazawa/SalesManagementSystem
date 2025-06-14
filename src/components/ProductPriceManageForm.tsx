import { useNavigate } from "react-router-dom";
import type { ProductStockType } from "../Types/ProductStockType";
import type { Dispatch, SetStateAction } from "react";
type Props = {
  productStocks: ProductStockType[];
  setProductStocks: Dispatch<SetStateAction<ProductStockType[]>>;
};
const ProductPriceManageForm = ({ productStocks, setProductStocks }: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>仕入処理</h2>
      <label>
        商品
        <select>
          {productStocks.map((productStock) => (
            <option value={productStock.id}>{productStock.productName}</option>
          ))}
        </select>
      </label>
      <label>
        仕入数
        <input type="number"></input>
      </label>
      <label>
        仕入価格
        <input type="number"></input>
      </label>
      <label>
        販売価格
        <input type="number"></input>
      </label>
      <p>仕入日</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        仕入
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
};

export default ProductPriceManageForm;
