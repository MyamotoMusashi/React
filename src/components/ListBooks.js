import React from "react"

import './ListBooks.css'

import BookService from "../services/BookService"
import UserService from "../services/UserService";
import ShoppingCartService from "../services/ShoppingCartService";
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

import Book from './Book'

function ListBooks() {
    const searchParams = useLocation()
    const values = queryString.parse(searchParams.search)

    let param = values.page || 1

    const [books, setBooks] = React.useState([])
    React.useEffect(() => {
        async function getBooks() {
            const books = await BookService.getBooks(param);
            setBooks(books);
            console.log(books)
        }
        getBooks()
    }, [])

    let bookTemplate = function (book) {
        if (book.id % 2 == 0) {
            return (
                <>
                    <li key={book.id} class="templatemo_product_box">
                        <Book orderBook={orderBook} book={book} />
                    </li>
                    <div class="cleaner_with_height">&nbsp;</div>
                </>
            );
        }
        else {
            return (
                <>
                    <li key={book.id} class="templatemo_product_box">
                        <Book orderBook={orderBook} book={book} />
                    </li>
                    <div class="cleaner_with_width">&nbsp;</div>
                </>
            );
        }
    }

    /*   let bookTemplate = function (book) {
          if (book.id % 2 == 0) {
              return (
                  <>
                      <li key={book.id} class="templatemo_product_box">
                          <Book orderBook={orderBook} book={book} />
                      </li>
                      <div class="cleaner_with_height">&nbsp;</div>
                  </>
              );
          }
          else {
              return (
                  <>
                      <li key={book.id} class="templatemo_product_box">
                          <Book orderBook={orderBook} book={book} />
                      </li>
                      <div class="cleaner_with_width">&nbsp;</div>
                  </>
              );
          }
      } */

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
        <>
            <section id="templatemo_content_right">
            <ul id="templatemo_content_right">
                {books.map(book => bookTemplate(book))}
            </ul>
            <a href="#">First Page</a>
            <a href="#">Second Page</a>
            </section>
        </>

    )
}

export default ListBooks