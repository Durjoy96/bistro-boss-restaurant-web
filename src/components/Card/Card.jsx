import { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Card = ({ recipe }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { image, name, recipe: description, price, _id } = recipe;
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const cartBtnHandler = () => {
    if (!user) {
      navigate("/login");
    } else {
      const itemInfo = { user_email: user.email, itemId: _id };
      axiosSecure
        .post("/cart", itemInfo)
        .then((res) => {
          console.log(res.data);
          toast.success("Successfully Added!");
          refetch(); //refetch cart get api
        })
        .catch((error) => toast.error(error.message));
    }
  };
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>${price}</p>
          <div className="card-actions">
            <button onClick={cartBtnHandler} className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
