import './App.css';
import TodoList from "./component/TodoList/TodoList";
import Header from "./component/Header/Header";
import {useState} from "react";
import styles from "./App.module.css"

const filters = ['all', 'active', 'completed'];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <Header filters={filters}
              filter={filter}
              onFilterChange={setFilter}/>
      <TodoList filter={filter}/>
    </>
  );
}

export default App;
