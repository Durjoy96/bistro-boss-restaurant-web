import Banner from "../banner/Banner";
import Categories from "../categories/Categories";
import Featured from "../featured/Featured";
import Popular from "../Popular/Popular";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <Popular />
      <Featured />
    </>
  );
};

export default Home;
