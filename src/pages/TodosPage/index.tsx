import React from 'react';
import { Container } from 'reactstrap';
import { AppNavbar } from '../../components/AppNavbar/index';
import { AddTodo, ITodo } from './components/AddTodo/index';
import { TodosList } from './components/TodosList';

interface ITodosPageProps {

};

export const TodosPage: React.FC<ITodosPageProps> = () => {

  const getNewTodo = (todo: ITodo) => console.log(todo);

  return (
    <div className="todos-page">
      <AppNavbar isAuthorized={true} />
      <Container>
        <TodosList />
        <AddTodo onSaveTodo={getNewTodo} />
      </Container>
    </div>
  );
};
