import React from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import AddBook from './components/AddBook';
import Header from './components/Header';
import ListBooks from './components/ListBooks';
import ListOrders from './components/ListOrders';
import Login from './components/Login';
import UserService from './services/UserService';

function App() {

  let [orderedBooks, setOrderedBooks] = React.useState([])
  let [username, setUsername] = React.useState("")

  React.useEffect(() => {
      function getUsername() {
          const username = UserService.getCurrentUser();
          console.log(username)
          setUsername(username)
      }
      getUsername()
  }, [])

  function onLogin(){
    setUsername(UserService.getCurrentUser())
  }

  return (
    <div className="App">
      <Header username={username}/>
      <main>
        <Route path="/" exact strict component={ListBooks}/>
        <Route path="/login">
          <Login onLogin={onLogin}/>
        </Route>
        <Route path="/list-books" exact strict component={ListBooks} />
        <Route path="/add-book" component={AddBook}/>
        <Route path="/orders" component={ListOrders}/>
      </main>
    </div>
  );
}

export default App;
