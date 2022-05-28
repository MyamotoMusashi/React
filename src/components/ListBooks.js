import React from "react"
import BookService from "../services/BookService"
import UserService from "../services/UserService";
import ShoppingCartService from "../services/ShoppingCartService";

import Book from './Book'

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
        if (book.id % 2 == 0) {
            return (
                    <li key={book.id}>
                        <div class="templatemo_product_box">
                            <Book orderBook={orderBook} book={book} />
                        </div>
                        <div class="cleaner_with_height">&nbsp;</div>
                    </li>
            );
        }
        else {
            return (
                    <li key={book.id}>
                        <div class="templatemo_product_box">
                            <Book orderBook={orderBook} book={book} />
                        </div>
                        <div class="cleaner_with_width">&nbsp;</div>
                    </li>
            );
        }
    }

    async function orderBook(book) {
        let user = {
            name: UserService.getCurrentUser()
        }

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