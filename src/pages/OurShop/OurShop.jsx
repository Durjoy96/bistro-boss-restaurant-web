import PageCover from "../../components/PageCover/PageCover";
import bannerImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

const OurShop = () => {
  const [menu] = useMenu();

  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const categories = [];
    for (const recipe of menu) {
      categories.push(recipe.category);
    }
    const unique = new Set(categories.map((category) => category));
    tabHandler([...unique][0]); //show 1st categories data after reloading the page
    setCategories([...unique]);
  }, [menu]);

  const tabHandler = (category) => {
    const filteredData = menu.filter((recipe) => recipe.category === category);
    // console.log(filteredData);
    setData(filteredData);
  };

  return (
    <>
      <section>
        <PageCover
          img={bannerImg}
          title="Our shop"
          subtitle="Would you like to try a dish?"
        />

        <div className="main-container mt-12 md:mt-20 lg:mt-32">
          <Tabs>
            <TabList className="flex gap-6 justify-center uppercase">
              {categories.map((category, idx) => (
                <Tab onClick={() => tabHandler(category)} key={idx}>
                  {category}
                </Tab>
              ))}
            </TabList>

            {categories.map((category, idx) => (
              <TabPanel key={idx}>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {data.map((recipe) => (
                    <Card recipe={recipe} />
                  ))}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default OurShop;
