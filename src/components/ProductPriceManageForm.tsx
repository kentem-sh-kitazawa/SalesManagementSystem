import { useNavigate } from "react-router-dom";
import type { ProductStockType } from "../Types/ProductStockType";
import {
  useRef,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";
type Props = {
  productStocks: ProductStockType[];
  setProductStocks: Dispatch<SetStateAction<ProductStockType[]>>;
};
const ProductPriceManageForm = ({ productStocks, setProductStocks }: Props) => {
  const navigate = useNavigate();
  const selectProductNameRef = useRef<string>("");
  const stockQuantiryRef = useRef(0);
  const purchasePriceRef = useRef(0);
  const salePriceRef = useRef(0);
  const purchaseDate = new Date();

  const purchaseDateText = `${purchaseDate.getFullYear()}年${
    purchaseDate.getMonth() + 1
  }月${purchaseDate.getDate()}日`;
  const handleSelectProductChange = (
    selectProduct: ChangeEvent<HTMLSelectElement>
  ) => {
    selectProductNameRef.current = selectProduct.target.value;
  };
  return (
    <div>
      <h2>仕入処理</h2>
      <label>
        商品
        <select onChange={handleSelectProductChange}>
          {productStocks.map((productStock) => (
            <option value={productStock.id}>{productStock.productName}</option>
          ))}
        </select>
      </label>
      <label>
        仕入数
        <input
          type="number"
          onChange={(stockQuantiry) =>
            (stockQuantiryRef.current = Number(stockQuantiry.target.value))
          }
        ></input>
      </label>
      <label>
        仕入価格
        <input
          type="number"
          onChange={(purchasePrice) =>
            (purchasePriceRef.current = Number(purchasePrice.target.value))
          }
        ></input>
      </label>
      <label>
        販売価格
        <input
          type="number"
          onChange={(salePrice) =>
            (salePriceRef.current = Number(salePrice.target.value))
          }
        ></input>
      </label>
      <p>仕入日:{purchaseDateText}</p>
      <button
        onClick={() => {
          //商品の情報を登録
          const beforeProductsStocks: ProductStockType[] = [...productStocks];
          const selectProduct = beforeProductsStocks.find((productStock) => {
            return productStock.productName === selectProductNameRef.current;
          });
          const updataSelectProduct = [
            ...beforeProductsStocks,
            {
              ...selectProduct!,
              stockQuantiry: stockQuantiryRef.current,
              purchasePrice: purchasePriceRef.current,
              salePrice: salePriceRef.current,
              purchaseDate: purchaseDateText,
            },
          ];
          setProductStocks(updataSelectProduct);
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
