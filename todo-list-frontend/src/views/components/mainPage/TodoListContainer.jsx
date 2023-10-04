import { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";
import { ModalAddTodo } from "./ModalAddTodo";
import { useAuthContext } from "../../../hooks";
import { NavTodos } from "./NavTodos";

export const TodoListContainer = () => {
  const { authState } = useAuthContext();
  const { todos } = authState;

  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
  const [todosToShow, setTodosToShow] = useState(todos);
  const [currentTodos, setCurrentTodos] = useState("all");

  useEffect(() => {
    setTodosToShow(todos);
  }, [todos]);

  const showInputToAddTodo = () => {
    setIsOpenModalAdd(true);
  };

  const handleTodosToShow = (current) => {
    setCurrentTodos(current);

    if (current === "all") setTodosToShow(todos);
    else if (current === "active")
      setTodosToShow(todos.filter((todo) => !todo.isChecked));
    else if (current === "completed")
      setTodosToShow(todos.filter((todo) => todo.isChecked));
  };

  return (
    <div className="w-full flex flex-col items-center justify-start ">
      <div className="w-full flex flex-col items-center justify-start p-3 pb-6 min-h-[79vh] lg:min-h-[75vh] lg:w-7/12  lg:bg-icon lg:shadow-2xl lg:shadow-text">
        <h2 className="text-2xl py-1 mb-2 lg:text-3xl lg:p-3 lg:mb-0 ">
          TO-DO LIST
        </h2>
        <button
          className="flex items-center justify-center w-9 h-9 text-3xl z-8 rounded-full bg-name text-purple-100 sm:bottom-4 lg:bg-text lg:text-icon"
          onClick={showInputToAddTodo}
        >
          +
        </button>
        <ul className="w-10/12 mt-3 lg:text-purple-100">
          {todosToShow.map((todo) => (
            <TodoItem key={todo._id} todo={todo} />
          ))}
        </ul>
      </div>
      <NavTodos
        currentTodos={currentTodos}
        handleTodosToShow={handleTodosToShow}
      />
      {isOpenModalAdd && (
        <ModalAddTodo
          setIsOpenModalAdd={setIsOpenModalAdd}
          setTodosToShow={setTodosToShow}
        />
      )}
    </div>
  );
};
