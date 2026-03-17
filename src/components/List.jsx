import './List.css';
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({todo, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search === "") {
            return todo;
        }

        return todo.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLocaleLowerCase())
        );
    };

    const filteredTodo = getFilteredData();

    return(
        <div className="List">
            <h4>✨Todo List✨</h4>
            <input 
            value={search}
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요"/>
            <div className="todo_wrapper">
                {filteredTodo.map((todo)=>{
                    return (
                        <TodoItem
                        key={todo.id}
                        {...todo}
                        onUpdate={onUpdate}
                        onDelete={onDelete}/>
                    );
                })}
            </div>
        </div>
    )
};

export default List;