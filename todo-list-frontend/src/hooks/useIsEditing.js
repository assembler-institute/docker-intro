import { useState } from "react";

export const useIsEditing = (inputToEdit) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEdit = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputToEdit.current.focus();
    }, 1);
  };

  const finishEdit = () => {
    setIsEditing(false);
  };

  return { isEditing, startEdit, finishEdit };
};
