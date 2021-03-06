
export async function getShoppingCart() {
    let shoppingCart
    shoppingCart = await (await fetch('/shopping-cart')).json()
    let shoppingCartMap = new Map(Object.entries(shoppingCart))

    return Array.from(shoppingCartMap.values())
}

export async function addToShoppingCart(book, user) {
    let order = {
        book: book,
        user: user,
    }

    await fetch('/shopping-cart', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(order)
    });
}

export async function clear() {
    await fetch('/shopping-cart?clear', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        }
    })
}

export async function removeOrderFromShoppingCart(book) {
    await fetch(`/shopping-cart?remove=${book.id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        }
    })
}

export async function orderBook(book) {
    if (book.quantity > 1) {
        book.quantity = book.quantity - 1
        await fetch('/books', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(book)
        });
    }
    else {
        deleteBook(book)
    }
}

export async function deleteBook(book) {
    await fetch('/books', {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(book)
    });
}

const ShoppingCartService = {
    getShoppingCart: getShoppingCart,
    addToShoppingCart: addToShoppingCart,
    clear: clear,
    removeOrderFromShoppingCart: removeOrderFromShoppingCart
}

export default ShoppingCartService 