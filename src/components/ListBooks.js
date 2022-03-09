import React from "react"
import BookService from "../services/BookService"
import UserService from "../services/UserService";
import OrderService from "../services/OrderService";
import ShoppingCartService from "../services/ShoppingCartService";

function ListBooks() {
    const [books, setBooks] = React.useState([])
    React.useEffect(() => {
        async function getBooks() {
            const books = await BookService.getBooks();
            setBooks(books);
            console.log(books)
        }
        getBooks()
    }, [])

    let bookTemplate = function (book) {
        return (
            <>
                <div class="templatemo_product_box">
                    <h1 id="bookHeader">{book.name} <span>(by {book.author})</span></h1>
                    <img src={book.url} alt="picture of the covers of {book.name}" />
                    <div class="product_info">
                        <p>{book.description}</p>
                        <p>Price: {book.price} BGN</p>
                        <h3>Quantity: {book.quantity}</h3>
                        <div class="primary_button" onClick={() => orderBook(book)}><a href="#">Order</a></div>
                        <div class="secondary_button"><a href="#">Detail</a></div>
                        <div class="secondary_button"><a href="#">Edit</a></div>
                    </div>
                </div>
            </>
        );
    }

    async function orderBook(book) {
        let user = {
            name: UserService.getCurrentUser()
        }

        //setBooks(books.filter(item => item !== book))
        BookService.orderBook(book)
        await ShoppingCartService.addToShoppingCart(book, user)
        const books = await BookService.getBooks()
        setBooks(books)
    }

    return (
        <div id="templatemo_content_right">
            {books.map(book => bookTemplate(book))}
        </div>
    )
}

export default ListBooks