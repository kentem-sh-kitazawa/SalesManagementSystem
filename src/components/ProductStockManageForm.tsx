import { useNavigate } from "react-router-dom";
import type { ProductStockType } from "../Types/ProductStockType";
import type { Dispatch, SetStateAction } from "react";
import type { SoldProductType } from "../Types/SoldProductType";

type Props = {
  productStocks: ProductStockType[];
  setProductStocks: Dispatch<SetStateAction<ProductStockType[]>>;
  setsoldProducts: Dispatch<SetStateAction<SoldProductType[]>>;
};

const ProductStockManageForm = ({
  productStocks,
  setProductStocks,
  setsoldProducts,
}: Props) => {
  //在庫がなくても見られる
  const navigate = useNavigate();
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>商品名</th>
            <th>仕入日</th>
            <th>仕入価格</th>
            <th>販売価格</th>
            <th>在庫数</th>
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
    </>
  );
};

export default ProductStockManageForm;
