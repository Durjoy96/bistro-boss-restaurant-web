import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import RecipeCard from "../../../components/RecipeCard/RecipeCard";
import useMenu from "../../../hooks/useMenu";

const Popular = () => {
  const [menu] = useMenu("popular");
  return (
    <>
      <section className="main-container">
        <SectionTitle title="Our Popular Dish" subtitle="check it out" />
        <div className="grid grid-cols-2 gap-6">
          {menu.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Popular;
