import React from "react";
import { TodoBoolean } from ".";

export type TodoItem = {
  isImportant: boolean;
  isCompleted: boolean;
  task: string;
};

type Props = {
  item: TodoItem;
  index: number;
  setBoolean: (todo: TodoItem, index: number, key: TodoBoolean) => void;
  deleteItem: (index: number) => void;
};

export const TodoTableItem: React.FC<Props> = ({
  item,
  index,
  setBoolean,
  deleteItem,
}) => {
  return (
    <tr className="pressable">
      <td onClick={() => setBoolean(item, index, "isCompleted")}>
        {item.task}
      </td>
      <td onClick={() => setBoolean(item, index, "isImportant")}>
        {item.isImportant ? "❗" : "💁‍♀️"}
      </td>
      <td onClick={() => setBoolean(item, index, "isCompleted")}>
        {item.isCompleted ? "✅" : "❌"}
      </td>
      <td>
        <button onClick={() => deleteItem(index)}>🗑️ delete</button>
      </td>
    </tr>
  );
};
