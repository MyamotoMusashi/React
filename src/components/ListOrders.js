import React from "react"
import OrderService from "../services/OrderService";
import BookItem from "./BookItem";
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

function ListOrders() {
    const searchParams = useLocation()
    const values = queryString.parse(searchParams.search)
    const [state, setState] = React.useState([])
    const [orders, setOrders] = React.useState([])

    let getOrders = React.useEffect(() => {
        async function getOrders(status) {
            const orders = await OrderService.getOrders();
            setOrders(orders.filter(order => order.status === status));
            setState(null)
        }

        switch (values.status) {
            case "notProcessed":
                getOrders("NotProcessed")
                break
            case "processed":
                getOrders("Processed")
                break
            case "completed":
                getOrders("Completed")
                break
            default:
                break
        }

    }, [])

    function change(order, option) {
        console.log(order)
        order.status = option
        OrderService.editOrder(order)
        setState(order.status)
    }

    let orderTemplate = function (order) {
        if (order.book.id % 2 == 0) {
            return (
                <li key={order.id}>
                    <div className="templatemo_product_box">
                        <BookItem book={order.book} />
                        <p>Customer: {order.user.name}</p>
                        <p>Status:
                            <select name="" id="" onChange={e => change(order, e.target.value)} value={order.status}>
                                <option value="Processed">Processed</option>
                                <option value="NotProcessed">Not Processed</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </p>
                        <a href="#" className="secondary_button">Remove</a>
                    </div>
                    <div className="cleaner_with_height">&nbsp;</div>
                </li>
            );
        }
        else {
            return (
                <li key={order.id}>
                    <div className="templatemo_product_box">
                        <BookItem book={order.book} />
                        <p>Customer: {order.user.name}</p>
                        <p>Status:
                            <select name="" id="" onChange={e => change(order, e.target.value)} value={order.status}>
                                <option value="Processed" >Processed</option>
                                <option value="NotProcessed">Not Processed</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </p>
                        <a href="#" className="secondary_button">Remove</a>
                    </div>
                    <div className="cleaner_with_width">&nbsp;</div>
                </li>
            );
        }
    }

    return (
        <>
            <div id="templatemo_content_right">
                <nav className="menu">
                    <ul>
                        <li key="NotProcessed"><a href="/orders?status=notProcessed">Not Processed</a></li>
                        <li key="Processed"><a href="/orders?status=processed">Processed</a></li>
                        <li key="Completed"><a href="/orders?status=completed">Completed</a></li>
                    </ul>
                </nav>
                <ul>
                    {orders.map(order => orderTemplate(order))}
                </ul>
            </div>
        </>
    )
}

export default ListOrders