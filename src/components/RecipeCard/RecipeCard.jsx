const RecipeCard = ({ recipe }) => {
  const { image, name, recipe: description, price } = recipe;
  return (
    <>
      <div className="flex">
        <div className="w-[118px] h-[104px]">
          <img
            className="rounded-tr-full rounded-br-full rounded-bl-full w-full h-full object-cover object-center"
            src={image}
            alt=""
          />
        </div>
        <div className="w-full ml-5">
          <div className="flex justify-between">
            <h2 className="text-xl">{name}</h2>
            <p className="text-yellow-500">${price}</p>
          </div>
          <p className="text-gray-500 mt-2">{description}</p>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
