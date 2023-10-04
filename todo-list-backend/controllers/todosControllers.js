const Todo = require("../models/Todo");
const User = require("../models/User");

const addTodo = async (req, res) => {
  const { todo, userId } = req.body;
  const { text, isChecked } = todo;

  try {
    const newTodo = await Todo.create({ text, isChecked });
    const user = await User.findOne({ _id: userId });
    user.todos.push(newTodo._id);

    await user.save();

    return res.status(201).json({
      ok: true,
      todo: newTodo,
    });
  } catch (error) {
    console.log(error);
    return res.status(503).json({
      ok: false,
      msg: "Something happened",
    });
  }
};

const editTodo = async (req, res) => {
  const todo = req.body;

  try {
    await Todo.findByIdAndUpdate(todo._id, {
      text: todo.text,
      isChecked: todo.isChecked,
    });
    return res.status(201).json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(503).json({
      ok: false,
      msg: "Something happened",
    });
  }
};

const deleteTodo = async (req, res) => {
  const { todoId, userId } = req.body;

  try {
    await Todo.findByIdAndDelete(todoId);
    const user = await User.findById(userId);
    user.todos.pull(todoId);
    await user.save();

    return res.status(200).json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(503).json({
      ok: false,
      msg: "Something happened",
    });
  }
};

module.exports = {
  addTodo,
  editTodo,
  deleteTodo,
};
