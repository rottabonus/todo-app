import React from "react";

type Props = {
  createItem: (
    task: string,
    isImportant: boolean,
    isCompleted: boolean
  ) => void;
};

export const NewItem: React.FC<Props> = ({ createItem }) => {
  const [isImportant, setIsImportant] = React.useState<boolean>(false);
  const [task, setTask] = React.useState<string>("");

  const onCreate = () => {
    createItem(task, isImportant, false);
    setIsImportant(false);
    setTask("");
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </td>
      <td />
      <td />
      <td>
        <button onClick={onCreate}>➕ create</button>
      </td>
    </tr>
  );
};
