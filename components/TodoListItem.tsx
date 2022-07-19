import { Dropdown } from "./DropDown";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  onRemoveTodo,
}) => {
  const onDelete = () => {
    onRemoveTodo(todo);
  };

  const dropdownOptions: Array<Option> = [
    {
      value: "Delete",
      onClick: onDelete,
      color: "red",
    },
  ];
  return (
    <li className={todo.complete ? "todo-row completed" : "todo-row"}>
      <label>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        {todo.text}
      </label>
      <Dropdown options={dropdownOptions} />
    </li>
  );
};
