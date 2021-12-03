import React from "react";
import { TodoBoolean } from ".";
import { NewItem } from "./NewItem";
import { TodoHeader } from "./TodoHeader";
import { TodoItem, TodoTableItem } from "./TodoItem";
import styled from "styled-components";

type Props = {
  todos: Array<TodoItem>;
  setBoolean: (item: TodoItem, index: number, key: TodoBoolean) => void;
  deleteItem: (index: number) => void;
  createItem: (
    task: string,
    isImportant: boolean,
    isCompleted: boolean
  ) => void;
  sortItems: (key: keyof TodoItem) => void;
};

const Table = styled.table`
  margin: 0 auto;
`;

export const TodoTable: React.FC<Props> = ({
  todos,
  setBoolean,
  deleteItem,
  createItem,
  sortItems,
}) => {
  return (
    <Table>
      <TodoHeader
        headers={["task", "important", "done", "action"]}
        sortItems={sortItems}
      />
      <tbody>
        {todos.map((t, i) => (
          <TodoTableItem
            key={`${i}${t.task}`}
            item={t}
            index={i}
            setBoolean={setBoolean}
            deleteItem={deleteItem}
          />
        ))}
        <NewItem createItem={createItem} />
      </tbody>
    </Table>
  );
};
