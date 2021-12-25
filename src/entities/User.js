import ShoppingCart from "./ShoppingCart"

class User{
    constructor(username){
        this.name = username
        this.shoppingCart = new ShoppingCart()
    }
}

export default User