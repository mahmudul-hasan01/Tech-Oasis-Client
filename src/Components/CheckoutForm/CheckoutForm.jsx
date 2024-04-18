import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useShopCart from "../../Hooks/useShopCart";
import useAuth from "../../Hooks/useAuth";

const CheckoutForm = () => {

    const {shopingData} = useShopCart()
    const {user} = useAuth()
    const [clientSecret, setcClientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosPublic = useAxiosPublic()
    const totalPrice = shopingData.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosPublic.post(`/payment-intent`, { price: totalPrice })
                .then(res => {
                    setcClientSecret(res?.data?.clientSecret)
                })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            toast.error(error.message)

        } else {
            // toast.success("Payment Done", paymentMethod?.id)
            console.log(paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log(confirmError);
        } else {
            console.log(paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                toast.success(paymentIntent?.id)

                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    status: 'pending',
                    shopingIds: shopingData.map(item => item._id),
                    productItemIds: shopingData.map(item => item.productId),
                }
                console.log(payment);
                const res = await axiosPublic.post('/payment', payment)

                if (res?.data?.paymentResult.insertedId) {
                    toast.success('Payment Successfully')
                    // navigate('/dashboard/paymentHistory')
                    // refetch()
                }
            }
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
           <div className="flex justify-center">
           <button className="btn btn-neutral btn-md mt-8" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
           </div>
        </form>
    );
};

export default CheckoutForm;