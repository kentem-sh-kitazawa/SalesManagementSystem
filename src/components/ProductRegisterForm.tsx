import { useRef, type Dispatch } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import type { Producttype } from "../Types/Products";
type Props = {
  setProducts: Dispatch<React.SetStateAction<Producttype[]>>;
  products: Producttype[];
};
const ProductRegisterForm = ({ setProducts, products }: Props) => {
  const [isInputTextCheck, setIsInputTextCheck] = useState<boolean>(true);
  //商品名を登録する
  const nameInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleOnRegister = () => {
    if (nameInputRef.current) {
      const newProduct: Producttype = {
        id: uuidv4(),
        productName: nameInputRef.current.value,
      };
      setProducts((product) => [...product, newProduct]);
    }
  };
  return (
    <div>
      <h2>商品登録</h2>
      <label>
        商品名
        <input type="text" ref={nameInputRef} />
      </label>
      <button onClick={handleOnRegister} disabled={isInputTextCheck}>
        登録
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        キャンセル
      </button>
      <table>
        <thead>
          <tr>
            <td>確認</td>
            <td>商品名</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{product.productName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProductRegisterForm;
