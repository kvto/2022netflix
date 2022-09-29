import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import {selectPrice} from "../features/counter/priceSlice"


 
const Paypal = () => {
  const price = useSelector(selectPrice)
  const paypal = useRef()

  useEffect(()=>{
    window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units : [
            {
              description: "Netflix subscription",
              amount : {
                currency_code: "USD",
                value: price,
              }
            }
          ]
        })
      },
      onApprove : async (data, actions) => { 
        const order = await actions.order.caputre();
        console.log(order)
      },
      onerror: err => console.log(err)

    }).render(paypal.current)
   },[])

  return(
    <div ref={paypal}>paypal222</div>
    
  )
    }

export default Paypal
