import PageCover from "../../components/PageCover/PageCover";
import bannerImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import { useEffect, useState } from "react";

const OurShop = () => {
  const [menu] = useMenu();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categories = [];
    for (const recipe of menu) {
      categories.push(recipe.category);
    }
    const unique = new Set(categories.map((category) => category));
    setCategories([...unique]);
    console.log(unique);
  }, [menu]);

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
                <Tab key={idx}>{category}</Tab>
              ))}
            </TabList>

            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default OurShop;
