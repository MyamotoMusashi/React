import BookItem from "./BookItem";

function Book(props) {
    let book = props.book

    function orderBook(book) {
        book = props.book
        console.log(book)
        props.orderBook(book)
    }

 
    return (
        <>
                <BookItem book={book}></BookItem>
                <div class="primary_button" onClick={orderBook}><a href="#">Order</a></div>
                <div class="secondary_button"><a href="#">Detail</a></div>
                <div class="secondary_button"><a href="#">Edit</a></div>
        </>
    );
}

export default Book