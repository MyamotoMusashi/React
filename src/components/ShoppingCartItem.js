import BookItem from "./BookItem";

function ShoppingCartItem(props) {
    function removeOrderFromShoppingCart() {
        props.removeOrderFromShoppingCart(book)
    }

    let order = null
    let book = props.book
    return (
        <>
            <BookItem book={book}/>
            <div class="secondary_button" onClick={removeOrderFromShoppingCart}><a href="#">Remove</a></div>
        </>
    );
}

export default ShoppingCartItem