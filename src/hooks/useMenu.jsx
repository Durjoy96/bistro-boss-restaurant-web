import { useEffect, useState } from "react";

const useMenu = (category) => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const recipesData = data.filter(
            (recipe) => recipe.category === category
          );
          setMenu(recipesData);
        } else {
          setMenu(data);
        }
      });
  }, []);
  return [menu];
};

export default useMenu;
