import PageCover from "../../components/PageCover/PageCover";
import heroImg from "../../assets/menu/banner3.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import useMenu from "../../hooks/useMenu";

const OurMenu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((recipe) => recipe.category === "offered");
  const dessert = menu.filter((recipe) => recipe.category === "dessert");
  const salad = menu.filter((recipe) => recipe.category === "salad");
  const soup = menu.filter((recipe) => recipe.category === "soup");
  return (
    <>
      <section>
        <PageCover
          img={heroImg}
          title="Our Menu"
          subtitle="Would you like to try a dish?"
        />
        <SectionTitle title="TODAY'S OFFER" subtitle="---Don't miss---" />
        <div className="main-container grid grid-cols-2 gap-6">
          {offered.map((recipe) => (
            <RecipeCard recipe={recipe} />
          ))}
        </div>
        {/* Dessert */}
        <div className="mt-12 md:mt-20 lg:mt-32">
          <PageCover
            img={dessertImg}
            title="DESSERTS"
            subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            category={true}
          />
          <div className="main-container mt-12 grid grid-cols-2 gap-6">
            {dessert.map((recipe) => (
              <RecipeCard recipe={recipe} />
            ))}
          </div>
        </div>
        {/* Salad */}
        <div className="mt-12 md:mt-20 lg:mt-32">
          <PageCover
            img={saladImg}
            title="salads"
            subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            category={true}
          />
          <div className="main-container mt-12 grid grid-cols-2 gap-6">
            {salad.map((recipe) => (
              <RecipeCard recipe={recipe} />
            ))}
          </div>
        </div>
        {/* Soups */}
        <div className="mt-12 md:mt-20 lg:mt-32">
          <PageCover
            img={soupImg}
            title="salads"
            subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            category={true}
          />
          <div className="main-container mt-12 grid grid-cols-2 gap-6">
            {soup.map((recipe) => (
              <RecipeCard recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMenu;
