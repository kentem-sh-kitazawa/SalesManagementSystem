import { useNavigate } from "react-router-dom";

const SalesHistoryForm = () => {
  const navigate = useNavigate();

  return (
    <>
      <table>
        <th>商品名</th>
        <th>販売価格</th>
        <th>販売数</th>
        <th>小計</th>
        <th>販売日</th>
      </table>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        戻る
      </button>
      <p>売上合計</p>
      <p>利益合計</p>
    </>
  );
};

export default SalesHistoryForm;
