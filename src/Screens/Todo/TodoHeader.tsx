import React from "react";
import { TodoTableHeader } from "./TodoHeaderItem";
import { TodoItem } from "./TodoItem";

type Props = {
  headers: Array<string>;
  sortItems: (key: keyof TodoItem) => void;
};

export const TodoHeader: React.FC<Props> = ({ headers, sortItems }) => {
  const mappedHeaders: Record<string, keyof TodoItem> = {
    task: "task",
    important: "isImportant",
    done: "isCompleted",
  };
  return (
    <thead>
      <tr>
        {headers.map((h, i) => (
          <TodoTableHeader
            key={`${i}${h}`}
            header={h}
            sortItems={sortItems}
            sortKey={mappedHeaders[h]}
          />
        ))}
      </tr>
    </thead>
  );
};
