function BookItem(props) {
    let order = props

    return (
        <>
            <h1 id="bookHeader">{order.book.name} <span>(by {order.book.author})</span></h1>
            <img src={order.book.url} alt="picture of the covers of {book.name}" />
            <div class="product_info">
                <p>{order.book.description}</p>
                <p>Price: {order.book.price} BGN</p>
                <h3>Quantity: {order.book.quantity}</h3>
            </div>
            <div class="cleaner"></div>
        </>
    )
}

export default BookItem