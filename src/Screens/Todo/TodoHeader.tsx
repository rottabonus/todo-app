import React from "react";
import { Row, TodoItem } from "./TodoItem";
import styled from "styled-components";

type Props = {
  headers: Array<string>;
  sortItems: (key: keyof TodoItem) => void;
};

const Header = styled.th`
  background: papayawhip;
  padding: 16px;
`;

export const TodoHeader: React.FC<Props> = ({ headers, sortItems }) => {
  const mappedHeaders: Record<string, keyof TodoItem> = {
    task: "task",
    important: "isImportant",
    done: "isCompleted",
  };

  const onHeaderPress = (sortKey: keyof TodoItem | false) => {
    if (!sortKey) {
      return;
    }
    sortItems(sortKey);
  };

  return (
    <thead>
      <Row>
        {headers.map((h, i) => (
          <Header
            key={`${i}${h}`}
            onClick={() => onHeaderPress(mappedHeaders[h])}
          >
            {h}
          </Header>
        ))}
      </Row>
    </thead>
  );
};
