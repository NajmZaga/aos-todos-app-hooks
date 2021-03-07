import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container } from 'reactstrap';
import { AppNavbar } from '../../components/AppNavbar';
import { ITodo, TodosContext } from '../../context/TodosContext';
import { AddTodo, INewTodo } from './components/AddTodo';
import { TodosList } from './components/TodosList';

interface ITodosPageProps {

};

interface ITodosContext {
  todos: ITodo[];
  makeTodo: (todo: INewTodo) => void;
  updatedTodo: (todo: ITodo) => void;
  removeTodo: (id: string) => void;
  toggleCompleted: (id: string) => void;
}

export const TodosPage: React.FC<ITodosPageProps & RouteComponentProps> = ({ history }) => {

  const { todos, makeTodo, updatedTodo, removeTodo, toggleCompleted }: ITodosContext = useContext(TodosContext);

  const handleLogout = () => history.push('/login');

  return (
    <div className="todos-page">
      <AppNavbar
        isAuthorized={true}
        onLogout={handleLogout}
      />
      <Container>
        <TodosList
          listTodos={todos}
          onUpdateTodo={updatedTodo}
          onRemoveTodo={removeTodo}
          onToggleComplete={toggleCompleted}
        />
        <AddTodo onSaveTodo={makeTodo} />
      </Container>
    </div>
  );
};
