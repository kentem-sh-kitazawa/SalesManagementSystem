import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import ProductRegisterForm from "./components/ProductRegisterForm";
import ProductPriceManageForm from "./components/ProductPriceManageForm";
import ProductSalesForm from "./components/ProductSalesForm";
import ProductStockManageForm from "./components/ProductStockManageForm";
import SalesHistoryForm from "./components/SalesHistoryForm";
import HomePage from "./components/HomePage";
import type { ProductStockType } from "./Types/ProductStockType";
import type { SoldProductType } from "./Types/soldProductType";
function App() {
  //在庫を管理するstate
  const [productStocks, setProductStocks] = useState<ProductStockType[]>([]);
  //販売した商品を管理するstate
  const [soldProducts, setsoldProducts] = useState<SoldProductType[]>([]);
  useEffect(() => {
    console.log(productStocks);
  }, [productStocks]);
  return (
    <Router>
      <></>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/ProductRegisterForm"
          element={<ProductRegisterForm setProductStocks={setProductStocks} />}
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
