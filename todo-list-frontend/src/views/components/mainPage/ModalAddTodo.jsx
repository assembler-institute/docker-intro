import { TiArrowBackOutline } from "react-icons/ti";
import { BsSendCheck } from "react-icons/bs";
import { useState } from "react";
import { useAuthContext } from "../../../hooks";

export const ModalAddTodo = ({ setIsOpenModalAdd }) => {
  const { addTodo } = useAuthContext();

  const [newTodo, setNewTodo] = useState({
    text: "",
    isChecked: false,
  });

  const closeModalAdd = () => {
    setIsOpenModalAdd(false);
  };

  const handleTextTodo = (e) => {
    setNewTodo({ ...newTodo, text: e.target.value });
  };

  const addNewTodo = () => {
    addTodo(newTodo);
    setIsOpenModalAdd(false);
  };

  return (
    <div className="absolute top-0 w-screen h-screen bg-white flex flex-col items-center justify-evenly py-12">
      <TiArrowBackOutline
        className="text-icon h-9 w-9 absolute top-2 left-2 cursor-pointer"
        onClick={closeModalAdd}
      />
      <h2 className="text-3xl">NEW TASK</h2>
      <label className="p-6 text-name text-lg">
        What do yo need to do?
        <input
          type="text"
          className="border-b border-purple-200 w-full pt-3 outline-none text-text"
          placeholder="Enter the task here"
          value={newTodo.text}
          onChange={handleTextTodo}
          onKeyDown={(e) => e.key === "Enter" && addNewTodo()}
        />
      </label>
      <BsSendCheck className="w-10 h-10 cursor-pointer " onClick={addNewTodo} />
    </div>
  );
};
