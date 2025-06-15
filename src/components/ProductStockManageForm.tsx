import { useNavigate } from "react-router-dom";

const ProductStockManageForm = () => {
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
