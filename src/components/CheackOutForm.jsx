import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const CheckOutForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const stripe = useStripe();
  const [transactionId,setTransactionId] =useState('')
  const elements = useElements();

  const money = 100;
  const getData = useCallback(async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_URL_SERVER}/create-payment-intent`,
        {
          money,
        }
      );
      console.log(response.data);
      setClientSecret(response.data.clientSecret);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [money]);

  useEffect(() => {
    getData();
  }, [getData, money]);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const email = user?.email || "anonymous@example.com";

    if (!validateEmail(email)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Invalid Email",
        text: "The provided email address is invalid.",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
        billing_details: {
          email,
          name: user?.displayName || "anonymous",
        },
      });

      if (error) {
        console.log("[error]", error);

        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      console.log("[PaymentMethod]", paymentMethod);

      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id,
        
        });

      if (confirmError) {
        console.log("[confirmError]", confirmError);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Payment Failed",
          text: `${confirmError.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      console.log("[PaymentIntent]", paymentIntent);
      if(paymentIntent.status==='succeeded'){
        setTransactionId(paymentMethod.id)
      }

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Payment Successful",
        text: `Your payment was successful! Transaction ID: ${paymentIntent.id}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Payment error:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Payment Error",
        text: `${error.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8">
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
        type="submit"
        className="btn w-full bg-green-500 text-white font-semibold hover:bg-green-700 my-9"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      {transactionId&& <p className="text-green-500 font-medium">Transaction ID : {transactionId}</p>}
    </form>
  );
};

export default CheckOutForm;
