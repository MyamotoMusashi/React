import React from "react"
import OrderService from "../services/OrderService";

function ListOrders() {
    const [orders, setOrders] = React.useState([])
    React.useEffect(() => {
            async function getOrders() {
                const orders = await OrderService.getOrders();
                setOrders(orders);
                console.log(orders);
            }
            getOrders()
    }, [])
        
    let orderTemplate = function (order) {
        return (
            <li>
                <section id="availableBook">
                    <h3 id="bookHeader">{order.book.name} (by {order.book.author})</h3>
                    <article id='bookCover'>
                        <img src={order.book.url} alt="picture of the covers of {book.name}" class="bookCoverImg"/>
                    </article>
                    <article id='bookDetails'>
                        <p>{order.book.description}</p>
                        <p>Price: {order.book.price} BGN</p>
                        <p>Quantity: {order.book.quantity}</p>
                        <p>{order.book.name}</p>
                    </article>
                    <p>Customer: {order.user.name}</p>
                    <p>Status: {order.status}</p>
                </section>
            </li>
        );
    }

    return (
        <section id="Orders">
            <h2>Orders</h2>
            <ul>
                {orders.map(order => orderTemplate(order))}
            </ul>
        </section>
    )
}

export default ListOrders