import NavigationPanel from "./NavigationPanel";
import TodaySalesSummary from "./TodaySalesSummary";

const HomePage = () => {
  return (
    <>
      <p>販売管理システム</p>
      <div>
        <NavigationPanel />
        <TodaySalesSummary />
      </div>
    </>
  );
};

export default HomePage;
