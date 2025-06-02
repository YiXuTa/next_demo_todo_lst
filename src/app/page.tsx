"use client"
import Image from "next/image";
import styles from "./page.module.css";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import TodoFilter from "@/components/TodoFilter";
import {useState} from "react";
import {Todo} from "@/types";

export default function Home() {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (text: string) => {
        const newTodo:Todo = {
            id: Date.now(),
            text,
            completed: false,
        }
        setTodos([...todos, newTodo])
    }

    const deleteTodo = (id:number) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const toggleTodo = (id:number) => {
        setTodos(todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            }
        ))
    }

    return (
        <>
            <h1> TodoList1 </h1>
            {/*<AddTodo addTodo={addTodo}></AddTodo>*/}
            {/*<TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></TodoList>*/}
            <TodoFilter></TodoFilter>
        </>
    );
}
