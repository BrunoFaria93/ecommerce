import Header from "../components/layout/Header";
import BestDeals from "../components/Route/BestDeals";
import Categories from "../components/Route/Categories";
import Hero from "../components/Route/Hero";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
    </div>
  );
};

export default HomePage;
