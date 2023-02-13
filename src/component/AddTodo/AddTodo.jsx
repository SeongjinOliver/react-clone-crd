import React, {useState} from 'react';
import styles from './AddTodo.module.css'
import {v4 as uuidv4} from 'uuid';

export default function AddTodo({onAdd}) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({id: uuidv4(), text, status: 'active'})
    setText('');
  }
  return (
    <form onSubmit={handleSubmit} className={styles.add}>
      <input type="text"
             placeholder='Add Todo'
             className={styles.text}
             value={text}
             onChange={handleChange}/>
      <button>Add</button>
    </form>
  );
}