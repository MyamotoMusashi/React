import { cleanup } from '@testing-library/react';
import React from 'react'
import OrderService from '../services/OrderService';
import ShoppingCartService from "../services/ShoppingCartService";

function ShoppingCart() {
    const [shoppingCartOrders, setShoppingCartOrders] = React.useState([])
    React.useEffect(() => {
        async function getShoppingCartOrders() {
            const shoppingCartOrders = await ShoppingCartService.getShoppingCart();
            setShoppingCartOrders(shoppingCartOrders);
        }
        getShoppingCartOrders()
    }, [])


    let orderTemplate = function (order) {
        if (order.book.id % 2 == 0) {
            return (
                <>
                    <div class="templatemo_product_box">
                        <h1 id="bookHeader">{order.book.name} <span>(by {order.book.author})</span></h1>
                        <img src={order.book.url} alt="picture of the covers of {book.name}" />
                        <div class="product_info">
                            <p>{order.book.description}</p>
                            <p>Price: {order.book.price} BGN</p>
                            <h3>Quantity: {order.book.quantity}</h3>
                            <div class="secondary_button" onClick={() => removeOrderFromShoppingCart(order)}><a href="#">Remove</a></div>
                        </div>
                        <div class="cleaner"></div>
                    </div>
                    <div class="cleaner_with_height">&nbsp;</div>
                </>
            );
        }
        else {
            return (
                <>
                    <div class="templatemo_product_box">
                        <h1 id="bookHeader">{order.book.name} <span>(by {order.book.author})</span></h1>
                        <img src={order.book.url} alt="picture of the covers of {book.name}" />
                        <div class="product_info">
                            <p>{order.book.description}</p>
                            <p>Price: {order.book.price} BGN</p>
                            <h3>Quantity: {order.book.quantity}</h3>
                            <div class="secondary_button" onClick={() => removeOrderFromShoppingCart(order)}><a href="#">Remove</a></div>
                        </div>
                        <div class="cleaner"></div>
                    </div>
                    <div class="cleaner_with_width">&nbsp;</div>
                </>
            );
        }
    }

    async function removeOrderFromShoppingCart(order) {
        ShoppingCartService.removeOrderFromShoppingCart(order)
        setShoppingCartOrders(await ShoppingCartService.getShoppingCart())
    }

    function checkout(shoppingCartOrders) {
        shoppingCartOrders.forEach(order => {
            OrderService.addOrder(order)
        });
        setShoppingCartOrders([])
        ShoppingCartService.clear()
    }

    return (
        <>
            <div id="templatemo_content_right">
                {shoppingCartOrders.map(order => orderTemplate(order))}
                <div id="checkout_button" class="primary_button" onClick={() => checkout(shoppingCartOrders)}><a href="#">Checkout</a></div>
            </div>
        </>
    )
}



export default ShoppingCart