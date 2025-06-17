import { useNavigate } from "react-router-dom";
import { useRef, useState, type Dispatch, type SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";

import type { ProductStockType } from "../Types/ProductStockType";
import type { SoldProductType } from "../Types/SoldProductType";
import type { Producttype } from "../Types/Products";
import { getDate } from "../utils/dateUtils";

type Props = {
  products: Producttype[];
  productStocks: ProductStockType[];
  setSoldProducts: Dispatch<SetStateAction<SoldProductType[]>>;
};
type checkBox = {
  id: string | undefined;
  isCheck: boolean;
};

const ProductSalesForm = ({
  products,
  productStocks,
  setSoldProducts,
}: Props) => {
  const navigate = useNavigate();
  //販売数
  const soldQuantiryRef = useRef<HTMLInputElement>(null);
  const [isInputCheck, setIsInputCheck] = useState<boolean>(true);
  // チェック状態の確認
  const checkBoxRef = useRef<checkBox[]>(
    productStocks.map((product) => {
      return { id: product.id, isCheck: false };
    })
  );
  const handleOnCheckBox = (selectId: string, value: boolean) => {
    checkBoxRef.current.forEach((checkBox) => {
      if (selectId === checkBox.id) {
        checkBox.isCheck = value;
      }
    });
  };
  const addSoldProduct = () => {
    if (soldQuantiryRef.current) {
      const checkedProduct = checkBoxRef.current.find(
        (checkBox) => checkBox.isCheck
      );
      const selectProducts = productStocks.filter(
        (products) => checkedProduct && products.id === checkedProduct.id
      );
      const saleInfo = selectProducts.map((product) => {
        const soldProduct: SoldProductType = {
          id: uuidv4(),
          productId: product.productId,
          salePrice: product.salePrice!,
          soldQuantiry: Number(soldQuantiryRef.current!.value),
          salesDate: getDate(),
        };
        return soldProduct;
      });
      setSoldProducts((prev) => [...prev, ...saleInfo]);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>商品名</th>
            <th>在庫数</th>
            <th>仕入価格</th>
            <th>販売価格</th>
            <th>販売数</th>
          </tr>
        </thead>
        <tbody>
          {productStocks.map((productStock) => (
            <tr key={productStock.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={(event) =>
                    handleOnCheckBox(productStock.id, event.target.checked)
                  }
                />
              </td>
              <td>
                {
                  products.find(
                    (product) => product.id === productStock.productId
                  )?.productName
                }
              </td>
              <td>{productStock.stockQuantiry}</td>
              <td>{productStock.purchasePrice}</td>
              <td>{productStock.salePrice}</td>
              <td>
                <input type="number" ref={soldQuantiryRef}></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addSoldProduct}>販売</button>
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

export default ProductSalesForm;
