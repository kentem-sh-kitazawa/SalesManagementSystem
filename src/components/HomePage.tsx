import type { AllProductsType } from "../Types/AllProductsType";
import NavigationPanel from "./NavigationPanel";
import TodaySalesSummary from "./TodaySalesSummary";

const HomePage = ({
  soldProducts,
  productStocks,
  products,
}: AllProductsType) => {
  return (
    <>
      <p>販売管理システム</p>
      <div>
        <NavigationPanel />
        <TodaySalesSummary
          soldProducts={soldProducts}
          productStocks={productStocks}
          products={products}
        />
      </div>
    </>
  );
};

export default HomePage;
