import React, {useState} from "react";

interface AddTodoProps {
    addTodo: (text:string) => void  // 一个函数签名，定义type
}

function AddTodo({addTodo}: AddTodoProps) {
    const [text, setText] = useState('')

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (text.trim() === '') {
            return window.alert('空数据')
        }
        addTodo(text.trim())
        setText('') // reset
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   value={text}
                   onChange={(e) => setText(e.target.value)}
            />
            <button>新建事项</button>
        </form>
    )
}

export default AddTodo