import './TodoItem.css'
function TodoItem(
    {
        completed,
        text,
        onComplete,
        onDelete,
        onEdit
    }
) {
    return (
        <li className="todoItem">
            <button
                className={`todoItemButton todoItemButton-complete ${completed && "todoItemButton-completed"}`}
                onClick={onComplete}
            ></button>
            <p className={`${completed && "todoItemParagraph-completed"}`}>{text}</p>
            <button
                className={'todoItemButton todoItemButton-edit'}
                onClick={onEdit}
            ></button>
            <button
                className={'todoItemButton todoItemButton-delete'}
                onClick={onDelete}
            ></button>
        </li>
    );
}

export { TodoItem }