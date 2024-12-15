# React Cheat Sheet

## 1. Introduction
React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and efficiently update and render components as data changes.

---

## 2. Why React?
- **Component-based:** Reusable and maintainable.
- **Virtual DOM:** Fast updates and rendering.
- **Declarative:** Easy to understand and debug.
- **Strong ecosystem:** Community support, libraries, and tools.

---

## 3. Setup
```bash
# Install Node.js and npm
node -v
npm -v

# Create React app
npx create-react-app my-app
cd my-app
npm start
```

To add default snippet in Visual studio
```bash
# React Arrow Function Component Export
Ctrl + Alt + R
rafce 
```

---

## 4. JSX
- Combines HTML with JavaScript syntax.
```jsx
const element = <h1>Hello, World!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

---

## 5. React Functional Components
```jsx
const Content = () => {
    function Greeting() {
        return <h1>Hello, React!</h1>;
    }
}

export default Content;
```

---

## 6. React Applying CSS Styles

### Inline Styling

```jsx
function StyledComponent() {
  const styles = { color: 'blue', fontSize: '20px' };
  return <h1 style={styles}>Styled Component</h1>;
}
```

###  CSS Stylesheets

```css
/* styles.css */
.header {
  color: red;
  font-size: 24px;
}
```

```jsx
import './styles.css';
function CSSStylesheet() {
  return <h1 className="header">Hello, CSS Stylesheets!</h1>;
}
```

---

## 7. React Click Events

### Click Event

```jsx
const handleClick = () => {
  console.log(`Button Clicked!`)
}
return (
<main>
  <button onClick={handleClick}>Click Me</button>
</main>
)
```

### Passing argument to click event

```jsx
const handleClick = (name) => {
  console.log(`${name} clicked the button!`)
}
return (
<main>
  <button onClick={() => handleClick('Bhadri')}>Click Me</button>
</main>
)
```

### Handling click event

```jsx
const handleClick = (e) => {
  console.log(e.target.innerText)
  e.target.innerText = "Handling Click Event"
}
return (
<main>
  <button onClick={(e) => handleClick(e)}>Click Me</button>
</main>
)
```

### Double click

```jsx
const handleDoubleClick = () => {
  console.log(`Double Clicked!`)
}

return (
<main>
  <button onDoubleClick={handleDoubleClick}>Double Click Me</button>
</main>
)
```

---

## 8. React useState Hook

### **Basic Syntax**
```jsx
const [state, setState] = useState(initialValue);
```
- **`state`**: Current state value.
- **`setState`**: Function to update the state.
- **`initialValue`**: Initial value of the state.

---

### **Usage Examples**

#### 1. **Basic Counter Example**
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
```

---

#### 2. **Using Strings**
```jsx
import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('Guest');

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
    </div>
  );
}

export default Greeting;
```

---

#### 3. **Using Objects**
- When managing complex state, use an object.  
- Always update using a shallow copy (spread operator) to avoid overwriting other properties.

```jsx
import React, { useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState({ name: '', age: '' });

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Age"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />
      <p>
        Name: {user.name}, Age: {user.age}
      </p>
    </div>
  );
}

export default UserProfile;
```

---

#### 4. **Using Arrays**
- Add, remove, or update elements in an array.

```jsx
import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => setTasks([...tasks, `Task ${tasks.length + 1}`]);

  return (
    <div>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```

---

### **Best Practices**
1. **Initialize with the correct data type**:
   - `useState(0)` for numbers.
   - `useState('')` for strings.
   - `useState([])` for arrays.
   - `useState({})` for objects.

2. **Avoid directly mutating state**:
   - Always use the setter function or immutable operations.
   ```jsx
   setState([...state, newValue]);
   setState({ ...state, key: value });
   ```

3. **Functional Updates**:
   - Use a function if the new state depends on the previous state.
   ```jsx
   setState((prevState) => prevState + 1);
   ```

4. **Multiple `useState` Hooks**:
   - Use multiple hooks for separate pieces of state instead of a single object.

---

## 9. React List and Keys
```jsx
const items = ['Apple', 'Banana', 'Cherry'];
<ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>;
```

---

## 10. React Icons
Install the library:
```bash
npm install react-icons --save
```
Usage:
```jsx
import { FaBeer } from 'react-icons/fa';
<FaBeer />;
```

---

## 11. React Props & Prop Drilling

### **React Props**

Props (short for "properties") in React are used to pass data from a parent component to a child component. They are a fundamental way of making components dynamic and reusable. Props are immutable, meaning that the child component receiving them cannot modify them.

### **How Props Work**
1. **Passing Props**: Props are passed to a child component as attributes of the JSX element.
   ```jsx
   const Greeting = (props) => {
       return <h1>Hello, {props.name}!</h1>;
   };

   const App = () => {
       return <Greeting name="Alice" />;
   };
   ```
   In this example:
   - The `Greeting` component receives a prop called `name`.
   - The `App` component passes `"Alice"` as the value of the `name` prop.

2. **Accessing Props**: Props are accessible in the child component via the `props` object or by destructuring.
   ```jsx
   const Greeting = ({ name }) => {
       return <h1>Hello, {name}!</h1>;
   };
   ```

---

### **Prop Drilling**

Prop drilling occurs when props are passed through multiple levels of components to reach a deeply nested child. This often happens in large React applications where a deeply nested component needs data from a higher-level parent component.

#### **Example of Prop Drilling**
```jsx
const GrandChild = ({ message }) => {
    return <p>{message}</p>;
};

const Child = ({ message }) => {
    return <GrandChild message={message} />;
};

const Parent = () => {
    const message = "Hello from Parent!";
    return <Child message={message} />;
};
```

---

## 12. React Controlled Inputs

In React, controlled inputs refer to form inputs (like text fields, checkboxes, radio buttons, etc.) whose values are controlled by the React state. 

### **Features of Controlled Inputs**

#### 1. **Input Value Bound to State**
```jsx
<input
    autoFocus
    id="addItem"
    type="text"
    placeholder="Add Item"
    value={newItem}
    onChange={(e) => setNewItem(e.target.value)}
    required
/>
```

#### 2. **State-Driven Behavior**
The value shown in the input field is driven by the React state. When the state changes, the input value reflects the update. 
For instance:
- Adding a new item resets the `newItem` field by clearing its value using `setNewItem('')` after submission.

#### 3. **Handling Form Submissions**
Event handlers like `handleSubmit` manage input actions, preventing default form behavior while allowing logic implementation:
```jsx
const [newItem, setNewItem] = useState("")
const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = {id, checked: false, item};
    const listItems = [...items, addNewItem];
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems));
};
const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!newItem) return;
    addItem(newItem);  // Add new item to the list
    setNewItem('');    // Clear the input field
};
```

---

## 13. React Project Challenge 1
**Task:** Create a counter app with increment and reset functionality.

---

## 14. React UseRef Hook
```jsx
const inputRef = useRef();
<input ref={inputRef} />;
```

---

## 15. React UseEffect Hook
```jsx
useEffect(() => {
  console.log('Component mounted or updated');
}, [dependency]);
```

---

## 16. React Local Storage
```jsx
useEffect(() => {
  localStorage.setItem('key', 'value');
}, []);
```

---

## 17. React Fetch API Data
```jsx
useEffect(() => {
  fetch('https://api.example.com/data')
    .then((res) => res.json())
    .then((data) => console.log(data));
}, []);
```

---

## 18. React CRUD Operations
- **Create:** `POST`
- **Read:** `GET`
- **Update:** `PUT/PATCH`
- **Delete:** `DELETE`

---

## 19. React Project Challenge 2 Fetch Data
**Task:** Create a dashboard app fetching and displaying API data dynamically.

---

## 20. React Router V6
Install:
```bash
npm install react-router-dom
```
Usage:
```jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>;
```

---

## 21. React CSS
- Inline styling: `{ color: 'red' }`
- Import CSS file:
```jsx
import './App.css';
```

---

## 22. React Axios API Requests
Install:
```bash
npm install axios
```
Usage:
```jsx
import axios from 'axios';
axios.get('https://api.example.com/data').then((response) => console.log(response));
```

---

## 23. React Custom Hooks
```jsx
function useCustomHook() {
  const [data, setData] = useState(null);
  return { data };
}
```

---

## 24. React Context API & useContext Hook
```jsx
const ThemeContext = React.createContext();
function App() {
  const theme = useContext(ThemeContext);
}
```

---

## 25. Deploy Your React Apps
- **Netlify:** Drag and drop your build folder.
- **Vercel:** Deploy using GitHub integration.

---

**Happy Coding!**
```