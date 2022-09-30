import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import {selectPrice} from "../features/counter/priceSlice"


 
const Paypal = () => {
  const price = useSelector(selectPrice)
  const paypal = useRef()

  useEffect(()=>{
    window.paypal.Buttons({
      createOrder: function(data, actions) {
        // This function sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: price
            }
          }]
        });
      },
      onApprove: function(data, actions) {
        // This function captures the funds from the transaction.
        return actions.order.capture().then(function(details) {
          // This function shows a transaction success message to your buyer.
          alert('Transaction completed by ' + details.payer.name.given_name);
        });
      }
    }).render(paypal.current)
   },[])

  return(
    <div ref={paypal}></div>
    
  )
    }

export default Paypal
