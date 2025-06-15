import { useNavigate } from "react-router-dom";
import {
  useRef,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";

import type { ProductStockType } from "../Types/ProductStockType";
type Props = {
  productStocks: ProductStockType[];
  setProductStocks: Dispatch<SetStateAction<ProductStockType[]>>;
};
const ProductPriceManageForm = ({ productStocks, setProductStocks }: Props) => {
  const navigate = useNavigate();
  //名前
  const selectProductNameRef = useRef<string>("");
  //仕入数
  const stockQuantiryRef = useRef<HTMLInputElement>(null);
  //仕入価格
  const purchasePriceRef = useRef<HTMLInputElement>(null);
  //販売価格
  const salePriceRef = useRef<HTMLInputElement>(null);
  //販売日
  const purchaseDate = new Date();

  const purchaseDateText = `${purchaseDate.getFullYear()}年${
    purchaseDate.getMonth() + 1
  }月${purchaseDate.getDate()}日`;
  const handleSelectProductChange = (
    selectProduct: ChangeEvent<HTMLSelectElement>
  ) => {
    selectProductNameRef.current = selectProduct.target.value;
    console.log(selectProduct.target.value);
  };
  return (
    <div>
      <h2>仕入処理</h2>
      <label>
        商品
        <select onChange={handleSelectProductChange}>
          {productStocks.map((productStock) => (
            <option value={productStock.id} key={productStock.id}>
              {productStock.productName}
            </option>
          ))}
        </select>
      </label>
      <label>
        仕入数
        <input type="number" ref={stockQuantiryRef}></input>
      </label>
      <label>
        仕入価格
        <input type="number" ref={purchasePriceRef}></input>
      </label>
      <label>
        販売価格
        <input type="number" ref={salePriceRef}></input>
      </label>
      <p>仕入日:{purchaseDateText}</p>
      <button
        onClick={() => {
          //商品の情報を登録
          const beforeProductsStocks: ProductStockType[] = [...productStocks];
          const updataSelectProducts = beforeProductsStocks.map(
            (productStock) =>
              productStock.id === selectProductNameRef.current
                ? {
                    ...productStock,
                    stockQuantiry: Number(stockQuantiryRef.current?.value),
                    purchasePrice: Number(purchasePriceRef.current?.value),
                    salePrice: Number(salePriceRef.current?.value),
                    purchaseDate: purchaseDateText,
                  }
                : productStock
          );
          setProductStocks(updataSelectProducts);
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
