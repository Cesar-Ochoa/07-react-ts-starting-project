import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import { removeTodo } from '../store/actions';
import { RootState } from '../store/types';
import classes from './Todos.module.css';

const Todos: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const dispatch = useDispatch();
    
    return (
        <ul className={classes.list}>
            {todos.map((item) => (
                <TodoItem 
                    key={item.id} 
                    text={item.text} 
                    onRemoveTodo={() => dispatch(removeTodo(item.id))}
                />
            ))}
        </ul>
    )
}

export default Todos;
