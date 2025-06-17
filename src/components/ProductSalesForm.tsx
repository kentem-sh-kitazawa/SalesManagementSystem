import { useNavigate } from "react-router-dom";
import { useRef, type Dispatch, type SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";

import type { ProductStockType } from "../Types/ProductStockType";
import type { SoldProductType } from "../Types/SoldProductType";
import type { Producttype } from "../Types/Products";
import { getDate } from "../utils/dateUtils";
// import { getDate } from "../utils/dateUtils";

type Props = {
  products: Producttype[];
  productStocks: ProductStockType[];
  setSoldProducts: Dispatch<SetStateAction<SoldProductType[]>>;
};

const ProductSalesForm = ({
  products,
  productStocks,
  setSoldProducts,
}: Props) => {
  const navigate = useNavigate();
  //判定用のid
  // チェック状態の確認
  type checkBox = {
    id: string | undefined;
    isCheck: boolean;
  };
  const checkBoxRef = useRef<checkBox[]>(
    productStocks.map((product) => {
      return { id: product.id, isCheck: false };
    })
  );
  const handleOnCheckBox = (selectId: string, value: boolean) => {
    console.log(value);
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

  //販売数
  const soldQuantiryRef = useRef<HTMLInputElement>(null);
  const [todaySoldProducts, setTodaySoldProducts] = useState<
    todaySoldProducts[]
  >([]);
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
          const selectProduct = beforeProductsStocks.find(
            (product) => product.id === soldProductIdRef.current
          );
          if (
            selectProduct!.stockQuantiry == null ||
            Number(soldQuantiryRef.current?.value) >
              selectProduct!.stockQuantiry
          ) {
            alert("在庫がありません");
          } else {
            //販売した商品を追加する処理
            setSoldProducts((prev) => {
              const beforeSoldProductsStocks: SoldProductType[] = [
                ...soldProducts,
              ];
              const selectSoldProduct = beforeSoldProductsStocks.find(
                (product) => product.id === soldProductIdRef.current
              );
              if (selectSoldProduct) {
                return prev.map((product) =>
                  product.id === selectProduct?.id
                    ? {
                        ...product,
                        soldQuantiry:
                          product.soldQuantiry +
                          Number(soldQuantiryRef.current?.value),
                        subTotal:
                          Number(soldQuantiryRef.current?.value) *
                          selectProduct!.salePrice!,
                        salesDate: getDate(),
                      }
                    : product
                );
              } else {
                return [
                  ...prev,
                  {
                    soldProductName: selectProduct!.productName,
                    salePrice: selectProduct!.salePrice!,
                    soldQuantiry: Number(soldQuantiryRef.current?.value),
                    subTotal:
                      Number(soldQuantiryRef.current?.value) *
                      selectProduct!.salePrice!,
                    salesDate: getDate(),
                    id: selectProduct!.id,
                  },
                ];
              }
            });
            //カートに追加する処理
            setTodaySoldProducts((prev) => {
              const selectAddCartProduct = prev.find((product) => {
                return product.id === soldProductIdRef.current;
              });
              if (selectAddCartProduct) {
                return prev.map((product) => {
                  return product.id === selectProduct?.id
                    ? {
                        ...product,
                        todaySoldQuantiry:
                          product.todaySoldQuantiry +
                          Number(soldQuantiryRef.current?.value ?? 0),
                      }
                    : product;
                });
              } else {
                return [
                  ...prev,
                  {
                    id: soldProductIdRef.current!,
                    productName: selectProduct!.productName,
                    todaySoldQuantiry: Number(
                      soldQuantiryRef.current?.value ?? 0
                    ),
                  },
                ];
              }
            });
            //在庫を減らす処理
            const updataSelectProducts = beforeProductsStocks.map(
              (productStock) => {
                return productStock.id === selectProduct?.id
                  ? {
                      ...productStock,
                      stockQuantiry:
                        (productStock.stockQuantiry ?? 0) -
                        Number(soldQuantiryRef.current?.value),
                    }
                  : productStock;
              }
            );
            setProductStocks(updataSelectProducts);
          }
        }}
      >
        追加
      </button>
      <p>カート</p>
      <table>
        <thead>
          <tr>
            <th>商品名</th>
            <th>個数</th>
          </tr>
        </thead>
        <tbody>
          {todaySoldProducts.map((products) => (
            <tr key={products.id}>
              <td>{products.productName}</td>
              <td>{products.todaySoldQuantiry}</td>
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
