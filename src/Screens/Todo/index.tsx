import React from "react";
import { TodoItem } from "./TodoItem";
import { TodoTable } from "./TodoTable";

export type TodoBoolean = keyof Omit<TodoItem, "task">;
const Todo: React.FC = () => {
  const initial = [{ task: "Shower", isImportant: true, isCompleted: false }];
  const [todos, setTodos] = React.useState<Array<TodoItem>>(initial);
  const [ascending, setAscending] = React.useState<boolean>(false);

  const setBoolean = (todo: TodoItem, index: number, key: TodoBoolean) => {
    const updatedTodo = { ...todo, [key]: !todo[key] };
    const updatedTodos = todos.map((t, i) => (i === index ? updatedTodo : t));
    setTodos(updatedTodos);
  };

  const deleteItem = (index: number) => {
    const updatedTodos = todos.filter((_t, i) => i !== index);
    setTodos(updatedTodos);
  };

  const sortItems = (key: keyof TodoItem) => {
    const sorted =
      key === "task" && ascending
        ? todos.sort((a, b) => a[key].localeCompare(b[key]))
        : key === "task"
        ? todos.sort((a, b) => b[key].localeCompare(a[key]))
        : ascending
        ? todos.sort((a, b) => Number(a[key]) - Number(b[key]))
        : todos.sort((a, b) => Number(b[key]) - Number(a[key]));
    setTodos(sorted);
    setAscending(!ascending);
  };

  const createItem = (
    task: string,
    isImportant: boolean,
    isCompleted: boolean
  ) => {
    const newTodo = { task, isImportant, isCompleted };
    setTodos(todos.concat(newTodo));
  };

  return (
    <div>
      <TodoTable
        todos={todos}
        setBoolean={setBoolean}
        deleteItem={deleteItem}
        createItem={createItem}
        sortItems={sortItems}
      />
    </div>
  );
};

export default Todo;
