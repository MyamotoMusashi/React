import React from 'react'
import OrderService from '../services/OrderService';
import ShoppingCartService from "../services/ShoppingCartService";
import BookItem from './BookItem'
import ShoppingCartItem from './ShoppingCartItem';

function ShoppingCart() {
    const [shoppingCartOrders, setShoppingCartOrders] = React.useState([])
    React.useEffect(() => {
        async function getShoppingCartOrders() {
            const shoppingCartOrders = await ShoppingCartService.getShoppingCart();
            console.log(shoppingCartOrders)
            setShoppingCartOrders(shoppingCartOrders);
        }
        getShoppingCartOrders()
    }, [])


    let orderTemplate = function (order) {
        if (order.book.id % 2 == 0) {
            return (
                <>
                    <div class="templatemo_product_box">
                        <ShoppingCartItem removeOrderFromShoppingCart={removeOrderFromShoppingCart} book={order.book} />
                    </div>
                    <div class="cleaner_with_height">&nbsp;</div>
                </>
            );
        }
        else {
            return (
                <>
                    <div class="templatemo_product_box">
                        <ShoppingCartItem removeOrderFromShoppingCart={removeOrderFromShoppingCart} book={order.book} />
                    </div>
                    <div class="cleaner_with_width">&nbsp;</div>
                </>
            );
        }
    }

    async function removeOrderFromShoppingCart(order) {
        console.log(order)
        console.log("blabla")
        await ShoppingCartService.removeOrderFromShoppingCart(order)
        setShoppingCartOrders(await ShoppingCartService.getShoppingCart())
    }

    function checkout(shoppingCartOrders) {
        shoppingCartOrders.forEach(order => {
            OrderService.addOrder(order)
        });
        setShoppingCartOrders([])
        ShoppingCartService.clear()
    }

    let shoppingCartIsEmpty = shoppingCartOrders.length > 0

    return (
        <>
            <div id="templatemo_content_right">
                {shoppingCartOrders.map(order => orderTemplate(order))}
                {shoppingCartIsEmpty ? <div id="checkout_button" class="primary_button" onClick={() => checkout(shoppingCartOrders)}><a href="#">Checkout</a></div> : <p id="shopping_cart_empty_text"> The Shopping Cart is empty.</p>}
            </div>
        </>
    )
}



export default ShoppingCart