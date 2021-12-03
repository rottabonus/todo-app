import React from "react";
import { TodoBoolean } from ".";
import styled from "styled-components";

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

export const Row = styled.tr`
  background: aliceblue;
  cursor: pointer;
`;

export const TableData = styled.td`
  padding: 16px;
  text-align: center;
`;

export const Button = styled.button`
  cursor: pointer;
  color: cornflowerblue;
  font-size: 1em;
  padding: 0.5em;
  border: 2px solid cornflowerblue;
  border-radius: 3px;
  background: cornsilk;
  &:hover {
    background: beige;
  }
`;

export const TodoTableItem: React.FC<Props> = ({
  item,
  index,
  setBoolean,
  deleteItem,
}) => {
  return (
    <Row>
      <TableData onClick={() => setBoolean(item, index, "isCompleted")}>
        {item.task}
      </TableData>
      <TableData onClick={() => setBoolean(item, index, "isImportant")}>
        {item.isImportant ? "❗" : "💁‍♀️"}
      </TableData>
      <TableData onClick={() => setBoolean(item, index, "isCompleted")}>
        {item.isCompleted ? "✅" : "❌"}
      </TableData>
      <TableData>
        <Button onClick={() => deleteItem(index)}>🗑️ delete</Button>
      </TableData>
    </Row>
  );
};
