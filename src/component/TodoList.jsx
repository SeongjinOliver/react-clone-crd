import React, {useState} from 'react';
import Header from "./Header";
import Body from "./Body";
import AddTodo from "./AddTodo/AddTodo";
import styles from "./TodoList.module.css";

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id: '123', text: '장보기', status: 'active'},
        {id: '1234', text: '공부하기', status: 'active'},
    ]);
    const handleAdd = (todo) => setTodos([...todos, todo])
    return <section>
        <ul>
            {
                todos.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
        </ul>
        <AddTodo onAdd={handleAdd}/>
    </section>
    // return (
    //     <div className={styles.main}>
    //         <Header/>
    //         <Body/>
    //
    //     </div>
    // );
}