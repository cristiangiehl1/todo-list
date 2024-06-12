import { FaRegTrashAlt } from "react-icons/fa";
import { FaCheckCircle, FaRegCircle} from "react-icons/fa";

import styles from './TodoItem.module.css';
import { useState } from "react";

interface TodoItemProps {
    description: string;
    onToggleTodoCompleted: (isCompleted: boolean) => void;
    deleteTodo: (todo: string) => void;
}

export function TodoItem({ description, onToggleTodoCompleted, deleteTodo }: TodoItemProps) {
    const [isTodoCompleted, setIstodoCompleted] = useState<boolean>(false);   

    function handleTodoCompleted() {
        const newCompletionState = !isTodoCompleted;
        setIstodoCompleted(newCompletionState);
        onToggleTodoCompleted(newCompletionState);
    }

    function handleDeleteTodo() {
        deleteTodo(description)
    }

    return (
        <div className={styles.todoItem}>
            <button className={styles.circle} onClick={handleTodoCompleted}>
                {
                    isTodoCompleted ?
                    <FaCheckCircle size={17}/> :
                    <FaRegCircle size={17}/>
                }
            </button>
            <span className={isTodoCompleted ? styles.spanStrikeThrough : ''}>{description}</span>
            <button 
                className={styles.trash} 
                onClick={handleDeleteTodo}
            >
                <FaRegTrashAlt size={20}/>
            </button>
        </div>
    )
}