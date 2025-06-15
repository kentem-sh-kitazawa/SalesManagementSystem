import { useNavigate } from "react-router-dom";
import type { ProductStockType } from "../Types/ProductStockType";
import type { Dispatch, SetStateAction } from "react";
import type { SoldProductType } from "../Types/SoldProductType";

type Props = {
  productStocks: ProductStockType[];
  soldProducts: SoldProductType[];
  setProductStocks: Dispatch<SetStateAction<ProductStockType[]>>;
  setSoldProducts: Dispatch<SetStateAction<SoldProductType[]>>;
  getDate: () => string;
};

const ProductSalesForm = ({
  productStocks,
  soldProducts,
  setProductStocks,
  setSoldProducts,
  getDate,
}: Props) => {
  const navigate = useNavigate();
  //判定用のid
  const soldProductIdRef = useRef<string>(productStocks[0].id);
  //販売数
  const soldQuantiryRef = useRef<HTMLInputElement>(null);
  //販売金額（小計）
  const subTotalRef = useRef<HTMLInputElement>(null);
  const handleSelectProductChange = (
    selectProduct: ChangeEvent<HTMLSelectElement>
  ) => {
    soldProductIdRef.current = selectProduct.target.value;
  };
  return (
    <div>
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
        販売数
        <input type="number" ref={soldQuantiryRef}></input>
      </label>
      <p>販売日:{getDate()}</p>
      <button
        onClick={() => {
          const beforeProductsStocks: ProductStockType[] = [...productStocks];
          const updataSelectProducts = beforeProductsStocks.map(
            (productStock) =>
              productStock.id === soldProductIdRef.current
                ? {
                    ...productStock,
                    stockQuantiry:
                      (productStock.stockQuantiry ?? 0) -
                      Number(soldQuantiryRef.current?.value),
                  }
                : productStock
          );
          setProductStocks(updataSelectProducts);
          // setProductStocks((prev) =>
          //   prev.map((productStock) =>
          //     productStock.id === soldProductIdRef.current
          //       ? Number(soldProductIdRef.current)>productStock.stockQuantiry ?{
          //           ...productStock,
          //           stockQuantiry:
          //             (productStock.stockQuantiry ?? 0) -
          //             Number(soldQuantiryRef.current?.value),
          //         }
          //       : productStock
          //   )
          // );
        }}
      >
        追加
      </button>
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
