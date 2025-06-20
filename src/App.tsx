import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import ProductRegisterForm from "./components/ProductRegisterForm";
import ProductPriceManageForm from "./components/ProductPriceManageForm";
import ProductSalesForm from "./components/ProductSalesForm";
import ProductStockManageForm from "./components/ProductStockManageForm";
import SalesHistoryForm from "./components/SalesHistoryForm";
import HomePage from "./components/HomePage";
import type { ProductStockType } from "./Types/ProductStockType";
import type { SoldProductType } from "./Types/SoldProductType";
import type { Producttype } from "./Types/Products";
function App() {
  //在庫を管理するstate
  const [productStocks, setProductStocks] = useState<ProductStockType[]>([]);
  //販売した商品を管理するstate
  const [soldProducts, setSoldProducts] = useState<SoldProductType[]>([]);
  //登録した商品を管理するstate
  const [products, setProducts] = useState<Producttype[]>([]);

  return (
    <Router>
      <></>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              soldProducts={soldProducts}
              productStocks={productStocks}
              products={products}
            />
          }
        ></Route>
        <Route
          path="/ProductRegisterForm"
          element={
            <ProductRegisterForm
              setProducts={setProducts}
              products={products}
            />
          }
        ></Route>
        <Route
          path="/ProductPriceManageForm"
          element={
            <ProductPriceManageForm
              productStocks={productStocks}
              setProductStocks={setProductStocks}
              products={products}
            />
          }
        ></Route>
        <Route
          path="/ProductSalesForm"
          element={
            <ProductSalesForm
              productStocks={productStocks}
              products={products}
              setSoldProducts={setSoldProducts}
            />
          }
        ></Route>
        <Route
          path="/ProductStockManageForm"
          element={
            <ProductStockManageForm
              productStocks={productStocks}
              products={products}
            />
          }
        ></Route>
        <Route
          path="/SalesHistoryForm"
          element={
            <SalesHistoryForm
              soldProducts={soldProducts}
              productStocks={productStocks}
              products={products}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
