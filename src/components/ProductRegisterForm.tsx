import { useNavigate } from "react-router-dom";

const ProductRegisterForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>商品登録</h2>
      <label>
        商品名
        <input type="text" />
      </label>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        登録
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
export default ProductRegisterForm;
