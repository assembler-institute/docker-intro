import { useRef, useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import { useAuthContext, useIsEditing } from "../../../hooks";

export const TodoItem = ({ todo }) => {
  const { editTodo, deleteTodo } = useAuthContext();
  const inputRef = useRef(null);
  const { isEditing, startEdit, finishEdit } = useIsEditing(inputRef);

  const [currentTodo, setCurrentTodo] = useState(todo);

  const handleIsChecked = () => {
    editTodo({ ...currentTodo, isChecked: !currentTodo.isChecked });
    setCurrentTodo({ ...currentTodo, isChecked: !currentTodo.isChecked });
  };

  const handleEditTodo = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  };

  const saveChangesEdit = () => {
    finishEdit();
    editTodo(currentTodo);
  };

  const handleDeleteTodo = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      iconColor: "#BB84E8",
      color: "#373a40",
      confirmButtonColor: "#BB84E8",
      cancelButtonColor: "#373a40",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTodo(todo._id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          iconColor: "#BB84E8",
          color: "#373a40",
          confirmButtonColor: "#BB84E8",
        });
      }
    });
  };

  return (
    <li className="flex items-center justify-between w-full py-2 border-b lg:border-purple-300">
      <input
        type="checkbox"
        checked={currentTodo.isChecked}
        onChange={handleIsChecked}
      />
      <input
        type="text"
        value={currentTodo.text}
        className={
          "bg-transparent ml-1 text-sm w-10/12 lg:text-base xl:text-lg " +
          (currentTodo.isChecked ? "line-through" : "")
        }
        ref={inputRef}
        disabled={!isEditing}
        onChange={handleEditTodo}
        onBlur={saveChangesEdit}
        onKeyDown={(e) => e.key === "Enter" && saveChangesEdit()}
      />
      <FiEdit2
        onClick={startEdit}
        className="text-icon cursor-pointer lg:text-text"
      />
      <FiTrash2
        onClick={handleDeleteTodo}
        className="text-name cursor-pointer ml-1"
      />
    </li>
  );
};
