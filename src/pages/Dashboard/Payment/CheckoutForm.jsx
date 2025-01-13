import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState("");

  const [cart] = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  console.log(totalPrice);

  const formSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email,
          },
        },
      });
    if (confirmError) {
      console.log("confirm Error");
    } else {
      console.log("paymentIntent", paymentIntent);
    }
  };

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: totalPrice || 1 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [totalPrice]);

  return (
    <>
      <form onSubmit={formSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="primary-btn mt-12"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
