import { useNavigate } from "react-router-dom";
const NavigationPanel = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/ProductRegisterForm")}>商品登録</button>
      <button onClick={() => navigate("/ProductPriceManageForm")}>
        仕入処理
      </button>
      <button onClick={() => navigate("/ProductSalesForm")}>販売処理</button>
      <button onClick={() => navigate("/ProductStockManageForm")}>
        在庫一覧
      </button>
      <button onClick={() => navigate("/SalesHistoryForm")}>販売集計</button>
    </div>
  );
};

export default NavigationPanel;
