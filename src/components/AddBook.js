import BookService from "../services/BookService"

function AddBook() {
    function addBook(e){
        e.preventDefault()
        let formData = new FormData(e.target)
        
        let bookToBeAdded = formData.get("name")
        let bookAuthor = formData.get("author")
        let bookPrice = formData.get("price")
        let bookUrl = formData.get("url")
        let bookDescription = formData.get("description")
        let bookQuantity = formData.get("quantity")
        let book = {
            name: bookToBeAdded,
            author: bookAuthor,
            price: bookPrice,
            url: bookUrl,
            description: bookDescription,
            quantity: bookQuantity
        }

        if (bookToBeAdded !== null && bookToBeAdded !== 'undefined' && bookToBeAdded !== "") {
            BookService.addBook(bookToBeAdded, bookAuthor, bookPrice, bookUrl, bookDescription, bookQuantity)
            document.getElementById('name').value = null
        }
    }

    return (
        <form onSubmit={addBook} method="POST">
            <input type="text" name="name" id="name" placeholder="book name" />
            <input type="text" name="author" id="author" placeholder="author" />
            <input type="text" name="price" id="price" placeholder="price" />
            <input type="text" name="url" id="url" placeholder="url of book cover" />
            <input type="text" name="description" id="description" placeholder="description of the book"/>
            <input type="text" name="quantity" id="quantity" placeholder="quantity of the book"/>
            <button type="submit">add book</button>
        </form>
    )
}

export default AddBook