"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: 
   Date:   
   
   Filename: tc_cart.js
	
*/

//  order total variable
var orderTotal = 0.0;

// cartHTML string that will hold the table for cart
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

// Loop through each item and add information
for (var i = 0; i < item.length; i++) {

    // Add order information to the cart
    cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td>" +
        "<td>$" + itemPrice[i] + "</td>" +
        "<td>" + itemQty[i] + "</td>";

    // item cost
    var itemCost = itemPrice[i] * itemQty[i];
    cartHTML += "<td>$" + itemCost + "</td></tr>"; 

    //  item cost
    orderTotal += itemCost;
}

//  order total 
cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>"

// Insert HTML for the cart information to the id "cart"
document.getElementById("cart").innerHTML = cartHTML;

