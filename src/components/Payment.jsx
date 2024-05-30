import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheackOutForm from './CheackOutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_PK_KEY);


const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise} >
                <CheackOutForm/>
    </Elements>  
        </div>
    );
};

export default Payment;