import React from "react";
import { TodoItem } from "./TodoItem";

type Props = {
  header: string;
  sortItems: (key: keyof TodoItem) => void;
  sortKey: keyof TodoItem | false;
};

export const TodoTableHeader: React.FC<Props> = ({
  header,
  sortItems,
  sortKey,
}) => {
  const onHeaderPress = () => {
    if (!sortKey) {
      return;
    }

    sortItems(sortKey);
  };
  return (
    <th className="pressable" onClick={onHeaderPress}>
      {header}
    </th>
  );
};
