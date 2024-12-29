import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import RecipeCard from "../../../components/RecipeCard/RecipeCard";

const Popular = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const recipesData = data.filter(
          (recipe) => recipe.category === "popular"
        );
        setRecipes(recipesData);
      });
  }, []);
  return (
    <>
      <section className="main-container">
        <SectionTitle title="Our Popular Dish" subtitle="check it out" />
        <div className="grid grid-cols-2 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Popular;
