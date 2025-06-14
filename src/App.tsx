import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductRegisterForm from "./components/ProductRegisterForm";
import ProductPriceManageForm from "./components/ProductPriceManageForm";
import ProductSalesForm from "./components/ProductSalesForm";
import ProductStockManageForm from "./components/ProductStockManageForm";
import SalesHistoryForm from "./components/SalesHistoryForm";
import NavigationPanel from "./components/NavigationPanel";
import TodaySalesSummary from "./components/TodaySalesSummary";
function App() {
  return (
    <Router>
      <>
        <p>販売管理システム</p>
        <div>
          <NavigationPanel />
          <TodaySalesSummary />
        </div>
      </>
      <Routes>
        <Route path="/"></Route>
        <Route
          path="/ProductRegisterForm"
          element={<ProductRegisterForm />}
        ></Route>
        <Route
          path="/ProductPriceManageForm"
          element={<ProductPriceManageForm />}
        ></Route>
        <Route path="/ProductSalesForm" element={<ProductSalesForm />}></Route>
        <Route
          path="/ProductStockManageForm"
          element={<ProductStockManageForm />}
        ></Route>
        <Route path="/SalesHistoryForm" element={<SalesHistoryForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
