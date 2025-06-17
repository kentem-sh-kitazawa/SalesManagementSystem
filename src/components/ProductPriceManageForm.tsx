import { useNavigate } from "react-router-dom";
import {
  useRef,
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";
import { v4 as uuidv4 } from "uuid";

import type { ProductStockType } from "../Types/ProductStockType";
import type { Producttype } from "../Types/Products";
import { getDate } from "../utils/dateUtils";

type Props = {
  productStocks: ProductStockType[];
  products: Producttype[];
  setProductStocks: Dispatch<SetStateAction<ProductStockType[]>>;
};

const ProductPriceManageForm = ({ products, setProductStocks }: Props) => {
  const navigate = useNavigate();
  //判定用のid
  const selectProductIdRef = useRef<string>(products[0].id);
  //仕入数
  const stockQuantiryRef = useRef<HTMLInputElement>(null);
  //仕入価格
  const purchasePriceRef = useRef<HTMLInputElement>(null);
  //販売価格
  const salePriceRef = useRef<HTMLInputElement>(null);
  const [isInputTextsCheck, setIsInputTextsCheck] = useState<boolean>(true);
  const handleSelectProductChange = (
    selectProduct: ChangeEvent<HTMLSelectElement>
  ) => {
    selectProductIdRef.current = selectProduct.target.value;
  };

  const handleOnPurcheseButton = () => {
    if (Number(stockQuantiryRef.current!.value) === 0) {
      setIsInputTextsCheck(true);
    } else if (Number(purchasePriceRef.current!.value) === 0) {
      setIsInputTextsCheck(true);
    } else if (Number(salePriceRef.current!.value) === 0) {
      setIsInputTextsCheck(true);
    } else {
      setIsInputTextsCheck(false);
    }
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
        <input
          type="number"
          ref={stockQuantiryRef}
          onChange={handleOnPurcheseButton}
        ></input>
      </label>
      <label>
        仕入価格
        <input
          type="number"
          ref={purchasePriceRef}
          onChange={handleOnPurcheseButton}
        ></input>
      </label>
      <label>
        販売価格
        <input
          type="number"
          ref={salePriceRef}
          onChange={handleOnPurcheseButton}
        ></input>
      </label>
      <p>仕入日:{getDate()}</p>
      <button
        disabled={isInputTextsCheck}
        onClick={() => {
          //商品の情報を登録 仕入価格よりも販売価格が安かったらアラート
          if (
            Number(purchasePriceRef.current?.value) >
            Number(salePriceRef.current?.value)
          ) {
            alert("販売価格が仕入価格よりも安くなっています");
          } else {
            const selectProduct = products.find(
              (product) => selectProductIdRef.current === product.id
            );
            const updataSelectProduct = {
              id: uuidv4(),
              productId: selectProduct!.id,
              stockQuantiry: Number(stockQuantiryRef.current?.value),
              purchasePrice: Number(purchasePriceRef.current?.value),
              salePrice: Number(salePriceRef.current?.value),
              purchaseDate: getDate(),
            };
            setProductStocks((prev) => [...prev, updataSelectProduct]);
          }
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
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        戻る
      </button>
    </div>
  );
};

export default ProductPriceManageForm;
