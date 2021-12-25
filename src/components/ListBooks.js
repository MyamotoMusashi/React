import React from "react"
import BookService from "../services/BookService"
import UserService from "../services/UserService";
import OrderService from "../services/OrderService";

function ListBooks() {
    const [books, setBooks] = React.useState([])
    React.useEffect(() => {
            async function getBooks() {
                const books = await BookService.getBooks();
                setBooks(books);
            }
            getBooks()
    }, [])
    
    let bookTemplate = function (book) {
        return (
            <li>
                <section id="availableBook">
                    <h3 id="bookHeader">{book.name} (by {book.author})</h3>
                    <article id='bookCover'>
                        <img src={book.url} alt="picture of the covers of {book.name}" class="bookCoverImg"/>
                    </article>
                    <article id='bookDetails'>
                        <p>{book.description}</p>
                        <p>Price: {book.price} BGN</p>
                        <p>Quantity: {book.quantity}</p>
                        <button onClick={() => orderBook(book)}>Order</button>
                        <button>Detail</button>
                        <button>Edit</button>
                    </article>
                </section>
            </li>
        );
    }

    function orderBook(book) {
        let user = {
            name: UserService.getCurrentUser()
        }

        setBooks(books.filter(item => item !== book))
        BookService.orderBook(book)
        OrderService.addOrder(book, user)
    }

    return (
        <section id="availableBooks">
            <h2>Available Books</h2>
            <ul>
                {books.map(book => bookTemplate(book))}
            </ul>
        </section>
    )
}

export default ListBooks