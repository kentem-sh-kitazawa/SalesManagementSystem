import type { AllProductsType } from "../Types/AllProductsType";
import { getDate } from "../utils/dateUtils";
import type { SoldProductType } from "../Types/SoldProductType";

const TodaySalesSummary = ({
  soldProducts,
  productStocks,
  products,
}: AllProductsType) => {
  const [todaySoldProducts, setTodaySoldProducts] = useState<SoldProductType[]>(
    []
  );
  useEffect(() => {
    const uodataTodaySoldProducts = soldProducts.filter(
      (soldProduct) => soldProduct.salesDate === getDate()
    );
    setTodaySoldProducts(uodataTodaySoldProducts);
  }, [soldProducts]);
  return (
    <>
      <p>本日の販売状況</p>
      <table>
        <thead>
          <tr>
            <th>商品名</th>
            <th>仕入価格</th>
            <th>販売価格</th>
            <th>仕入日</th>
            <th>販売日</th>
            <th>販売数</th>
            <th>小計</th>
          </tr>
        </thead>
      </table>
      <p>売上合計:</p>
      <p>利益合計:</p>
    </>
  );
};

export default TodaySalesSummary;
