import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import Counter from "./UseStateCounter";
import Greeting from "./UseStateString";
import UserProfile from "./UseStateObject"
import TodoList from "./UseStateArray"
import { useEffect, useState } from 'react';
import SearchItem from "./SearchItem";

function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("")
  const [search, setSearch] = useState("")
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not received");
        const listItems = await response.json();
        console.log(listItems)
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000)
    
    
  }, [])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = {id, checked: false, item};
    const listItems = [...items, addNewItem];
    setItems(listItems)
  }
  
  const handleCheck = (id) => {
    const listItem = items.map((item) =>
      item.id === id ? {...item, checked: !item.checked}: item
    )
    setItems(listItem);
  }

  const handleDelete = (id) => {
    let listItem = items.filter((item) =>
      item.id !== id
    );
    setItems(listItem);
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
      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p> {`Error: ${fetchError}`}</p>}
        {!isLoading && !fetchError && <Content 
          items = {items.filter(item => 
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />}
      </main>
      {/* <UserProfile />
      <TodoList />
      <Greeting />
      <Counter /> */}
      <Footer length = {items.length}/>
    </div>
  );
}

export default App;
