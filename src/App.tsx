import { MdEditDocument } from "react-icons/md";

import './styles/global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { TodoItem } from './components/TodoItem';
import { useState } from "react";


export function App() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [todoCompletedCount, setTodoCompletedCount] = useState<number>(0);

  function handleCreateNewTodo(todoToCreate: string) {
    setTodoList(prevState => [...prevState, todoToCreate])
  }

  function deleteTodo(todoToDelete: string) {
    const newTodoList = todoList.filter(todo => {
      return todo !== todoToDelete
    })

    setTodoList(newTodoList)
  }

  function handleTodoCompleted(isCompleted: boolean) {
    setTodoCompletedCount(prevCount => isCompleted ? prevCount + 1 : prevCount - 1);
  }

  return (
    <div content={styles.app}>
      <Header onCreateNewTodo={handleCreateNewTodo}/>

      <main className={styles.content}>
        <div className={styles.todoCount}>
            <h3>Tarefas criadas <span className={styles.spanBg}>{todoList.length}</span></h3>
            <h3>Concluídas <span className={styles.spanBg}>{todoCompletedCount !== 0 ? `${todoCompletedCount} de ${todoList.length}` : 0}</span></h3>
        </div>
        <div className={styles.todoList}>
          { 
            todoList.length === 0 ? 

            <div className={styles.EmptyListMsg}>
              <MdEditDocument size={56}/>
              <div className={styles.textWrapper}>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </div> :             
            todoList.map((item, index) => (
              <TodoItem 
                key={index} 
                description={item} 
                onToggleTodoCompleted={handleTodoCompleted}
                deleteTodo={deleteTodo}
              />
            ))
          }
        </div>
      </main>

    </div>
  )
}




