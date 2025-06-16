import { useNavigate } from "react-router-dom";
import {
  useRef,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";

import type { ProductStockType } from "../Types/ProductStockType";
import type { Producttype } from "../Types/Products";
type Props = {
  productStocks: ProductStockType[];
  products: Producttype[];
  setProductStocks: Dispatch<SetStateAction<ProductStockType[]>>;
  getDate: () => string;
};
const ProductPriceManageForm = ({
  products,
  setProductStocks,
  getDate,
}: Props) => {
  const navigate = useNavigate();
  //判定用のid
  const selectProductIdRef = useRef<string>(productStocks[0].id);
  //仕入数
  const stockQuantiryRef = useRef<HTMLInputElement>(null);
  //仕入価格
  const purchasePriceRef = useRef<HTMLInputElement>(null);
  //販売価格
  const salePriceRef = useRef<HTMLInputElement>(null);

  const handleSelectProductChange = (
    selectProduct: ChangeEvent<HTMLSelectElement>
  ) => {
    selectProductIdRef.current = selectProduct.target.value;
  };
  return (
    <div>
      <h2>仕入処理</h2>
      <label>
        商品
        <select onChange={handleSelectProductChange}>
          {products.map((product) => (
            <option value={product.id} key={product.id}>
              {product.productName}
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
      <p>仕入日:{getDate()}</p>
      <button
        onClick={() => {
          //商品の情報を登録
          const beforeProductsStocks: ProductStockType[] = [...productStocks];
          const updataSelectProducts = beforeProductsStocks.map(
            (productStock) =>
              productStock.id === selectProductIdRef.current
                ? {
                    ...productStock,
                    stockQuantiry:
                      (productStock.stockQuantiry ?? 0) +
                      Number(stockQuantiryRef.current?.value),
                    purchasePrice: Number(purchasePriceRef.current?.value),
                    salePrice: Number(salePriceRef.current?.value),
                    purchaseDate: getDate(),
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
