import './TodoItem.css'
function TodoItem({completed, text, onComplete}) {
    return (
        <li className="todoItem">
            <button 
                className={`todoItemButton ${completed && "todoItemButton-completed"}`}
                onClick={onComplete}
            ></button>
            <p className={`${completed && "todoItemParagraph-completed"}`}>{text}</p>
        </li>
    );
}

export { TodoItem }