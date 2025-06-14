import { useState, type Dispatch, type SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

import type { ProductStockType } from "../Types/ProductStockType";
type Props = {
  setProductStocks: Dispatch<SetStateAction<ProductStockType[]>>;
};
const ProductRegisterForm = ({ setProductStocks }: Props) => {
  //商品名を登録する
  const navigate = useNavigate();
  const [newProductName, setNewProductName] = useState<string>("");
  return (
    <div>
      <h2>商品登録</h2>
      <label>
        商品名
        <input
          type="text"
          value={newProductName}
          onChange={(newProductName) =>
            setNewProductName(newProductName.target.value)
          }
        />
      </label>
      <button
        onClick={() => {
          const newProduct: ProductStockType = {
            productName: newProductName,
          };
          setProductStocks((productStock) => [...productStock, newProduct]);
          navigate("/");
        }}
      >
        登録
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
export default ProductRegisterForm;
