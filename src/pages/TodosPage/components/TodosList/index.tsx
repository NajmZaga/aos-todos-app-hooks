import React from 'react';
import { Alert, Badge, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { ITodo } from '../../../../context/TodosContext';

interface ITodosListProps {
  listTodos: ITodo[];
  onRemoveTodo: (id: string) => void;
};

export const TodosList: React.FC<ITodosListProps> = ({ listTodos, onRemoveTodo }) => {

  return (
    <div className="todos-list">
      <h2>Liste des tâches</h2>
      <ListGroup>
        {
          listTodos.length ?
            listTodos.map(todo => (
              <ListGroupItem key={todo.id}>
                <strong>
                  {todo.title}
                </strong>
              : {todo.description} - <Button color="link" onClick={() => onRemoveTodo(todo.id)}>Supprimer</Button>
                <Badge color={todo.completed ? 'success' : 'danger'}>
                  {todo.completed ? 'Complétée' : 'Non complétée'}
                </Badge>
              </ListGroupItem>
            ))
            :
            <Alert color="secondary">
              La liste est vide
          </Alert>
        }
      </ListGroup>
    </div>
  );
};
