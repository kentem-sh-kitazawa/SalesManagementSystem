import { useNavigate } from "react-router-dom";
import type { ProductStockType } from "../Types/ProductStockType";
import type { Producttype } from "../Types/Products";

type Props = {
  productStocks: ProductStockType[];
  products: Producttype[];
};
const ProductStockManageForm = ({ productStocks, products }: Props) => {
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
        <tbody>
          {productStocks.map((productStock) => (
            <tr key={productStock.id}>
              <td>
                {products.map((product) => {
                  if (product.id === productStock.productId) {
                    return product.productName;
                  }
                })}
              </td>
              <td>{productStock.purchaseDate}</td>
              <td>{productStock.purchasePrice}</td>
              <td>{productStock.salePrice}</td>
              <td>{productStock.stockQuantiry}</td>
            </tr>
          ))}
        </tbody>
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
