let books = []

export async function getBooks() {
    const books = await (await fetch('/books')).json()
    return books;
}

export async function addBook(bookName, bookAuthor, bookPrice, bookUrl, bookDescription, bookQuantity) {
    let book = {
        name: bookName,
        author: bookAuthor,
        price: bookPrice,
        url: bookUrl,
        description: bookDescription,
        quantity: bookQuantity
    }

    if (bookName !== null && bookName !== 'undefined' && bookName !== "") {
        //books.push(book)
        await fetch('/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(book)
        });
    }
}

export async function deleteBook(book){
    await fetch('/books', {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(book)
    });
}

const BookService = {
    getBooks: getBooks,
    addBook: addBook,
    deleteBook: deleteBook
}

export default BookService