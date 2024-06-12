import styles from "./Header.module.css";
import rocketSvg from '../../assets/rocket.svg';
import { CiCirclePlus } from "react-icons/ci";

import { ChangeEvent, FormEvent, useState } from "react";

interface Header {    
    onCreateNewTodo: (content: string) => void
}

export function Header({ onCreateNewTodo }: Header) {
    const [newTodoText, setNewTodoText] = useState('');


    function handleOnCreateNewTodo(event: FormEvent) {
        event.preventDefault();
        onCreateNewTodo(newTodoText);

        setNewTodoText('');
    }

    function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
        // event.target.setCustomValidity('');
        setNewTodoText(event.target.value)
    }

    return (
        <header className={styles.header}>
            <img src={rocketSvg} alt="" />
            <strong>
                to<span>do</span>
            </strong>
            
            <form className={styles.inputWrapper} onSubmit={handleOnCreateNewTodo} >
                <input 
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleNewTodoChange}   
                    value={newTodoText}              
                />
                <button type="submit">
                    Criar
                    <CiCirclePlus size={15}/>
                </button>

            </form>
        </header>
    )
}