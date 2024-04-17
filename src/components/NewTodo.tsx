import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions";
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
    const dispatch = useDispatch();
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            return;
        }

        dispatch(addTodo(enteredText));
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;
