import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import Counter from "./UseStateCounter";
import Greeting from "./UseStateString";
import UserProfile from "./UseStateObject"
import TodoList from "./UseStateArray"
import { useState } from 'react';
import SearchItem from "./SearchItem";

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todo_list")));

  const [newItem, setNewItem] = useState("")
  const [search, setSearch] = useState("")

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = {id, checked: false, item};
    const listItems = [...items, addNewItem];
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  }
  
  const handleCheck = (id) => {
    const listItem = items.map((item) =>
      item.id === id ? {...item, checked: !item.checked}: item
    )
    setItems(listItem);
    localStorage.setItem("todo_list", JSON.stringify(listItem));
  }

  const handleDelete = (id) => {
    let listItem = items.filter((item) =>
      item.id !== id
    );
    setItems(listItem);
    localStorage.setItem("todo_list", JSON.stringify(listItem));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem('');
  }


  return (
    <div className="App">
      <Header title = "To do list"/>
      <AddItem
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem
        search = {search}
        setSearch = {setSearch} 
      />
      <Content 
        items = {items.filter(item => 
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      {/* <UserProfile />
      <TodoList />
      <Greeting />
      <Counter /> */}
      <Footer length = {items.length}/>
    </div>
  );
}

export default App;
