let orders = []

export async function getOrders() {
    const orders = await (await fetch('/orders')).json()
    console.log(orders)
    return orders;
}

export async function addOrder(order) {
    await fetch('/orders', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(order)
    });
}

const OrderService = {
    getOrders: getOrders,
    addOrder: addOrder
}

export default OrderService