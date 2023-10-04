export const NavTodos = ({ currentTodos, handleTodosToShow }) => {
  return (
    <p className="p-5 text-icon">
      <span
        className={
          "cursor-pointer p-1 " +
          (currentTodos === "all" ? "text-name" : "text-text")
        }
        onClick={() => handleTodosToShow("all")}
      >
        All{" "}
      </span>{" "}
      /{" "}
      <span
        className={
          "cursor-pointer p-1 " +
          (currentTodos === "active" ? "text-name" : "text-text")
        }
        onClick={() => handleTodosToShow("active")}
      >
        {" "}
        Active{" "}
      </span>{" "}
      /{" "}
      <span
        className={
          "cursor-pointer p-1 " +
          (currentTodos === "completed" ? "text-name" : "text-text")
        }
        onClick={() => handleTodosToShow("completed")}
      >
        {" "}
        Completed
      </span>
    </p>
  );
};
