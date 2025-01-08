import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  return (
    <div className="bg-base-100 p-12 rounded-xl">
      <p className="text-xl font-bold">Total Items: {cart.length}</p>
    </div>
  );
};

export default Cart;
