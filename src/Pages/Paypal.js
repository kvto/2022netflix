import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import {selectPrice} from "../features/counter/priceSlice"

  
const Paypal = () => {

      // paypal.Buttons({
      //   style: {
      //     shape: 'rect',
      //     color: 'gold',
      //     layout: 'vertical',
      //     label: 'paypal',
          
      //   },

      //   createOrder: function(data, actions) {
      //     return actions.order.create({
      //       purchase_units: [{"description":"Pagar","amount":{"currency_code":"USD","value":12}}]
      //     });
      //   },

      //   onApprove: function(data, actions) {
      //     return actions.order.capture().then(function(orderData) {
            
      //       // Full available details
      //       console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

      //       // Show a success message within this page, e.g.
      //       const element = document.getElementById('paypal-button-container');
      //       element.innerHTML = '';
      //       element.innerHTML = '<h3>Thank you for your payment!</h3>';

      //       // Or go to another URL:  actions.redirect('thank_you.html');
            
      //     });
      //   },

      //   onError: function(err) {
      //     console.log(err);
      //   }
      // }).render('#paypal-button-container')
    }


export default Paypal
