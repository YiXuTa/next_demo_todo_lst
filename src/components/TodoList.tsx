import {Todo} from "@/types";
import TodoItem from "@/components/TodoItem";

interface TodoListProps {
    todos: Array<Todo>; // 定义类型
    toggleTodo: (id:number) => void;  // 定义签名type
    deleteTodo: (id:number) => void;
}

function TodoList({todos, toggleTodo, deleteTodo}:TodoListProps) {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoItem>
            ))}
        </ul>
    )
}

export default TodoList