import { Header } from "../components/mainPage/Header";
import { TodoListContainer } from "../components/mainPage/TodoListContainer";

const MainPage = () => {
  return (
    <div className="lg:flex flex-col items-center">
      <Header />
      <TodoListContainer />
    </div>
  );
};

export default MainPage;
