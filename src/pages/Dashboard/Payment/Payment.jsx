import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_PK);

const Payment = () => {
  return (
    <>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
      <section className="main-container">
      </section>
    </>
  );
};

export default Payment;
