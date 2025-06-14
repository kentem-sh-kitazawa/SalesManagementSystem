import { useNavigate } from "react-router-dom";

const ProductPriceManageForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>仕入処理</h2>
      <label>
        商品
        <select>
          <option>a</option>
        </select>
      </label>
      <label>
        仕入数
        <input type="number"></input>
      </label>
      <label>
        仕入価格
        <input type="number"></input>
      </label>
      <label>
        販売価格
        <input type="number"></input>
      </label>
      <p>仕入日</p>
      <button
        onClick={() => {
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
