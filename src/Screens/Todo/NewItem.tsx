import React from "react";
import { Button, Row, TableData } from "./TodoItem";
import styled from "styled-components";

type Props = {
  createItem: (
    task: string,
    isImportant: boolean,
    isCompleted: boolean
  ) => void;
};

const Input = styled.textarea`
  width: calc(100% + 24px);
  box-sizing: border-box;
  margin: -12px;
  border: 2px solid cornflowerblue;
`;

export const NewItem: React.FC<Props> = ({ createItem }) => {
  const [isImportant, setIsImportant] = React.useState<boolean>(false);
  const [task, setTask] = React.useState<string>("");

  const onCreate = () => {
    createItem(task, isImportant, false);
    setIsImportant(false);
    setTask("");
  };

  return (
    <Row>
      <TableData>
        <Input value={task} onChange={(e) => setTask(e.target.value)} />
      </TableData>
      <TableData />
      <TableData />
      <TableData>
        <Button onClick={onCreate}>➕ create</Button>
      </TableData>
    </Row>
  );
};
