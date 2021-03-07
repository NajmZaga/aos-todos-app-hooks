import React, { useState } from 'react';
import { Alert, Badge, Button, Col, Form, FormGroup, Input, Label, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { ITodo } from '../../../../context/TodosContext';
import { INewTodo } from '../AddTodo';

interface ITodosListProps {
  listTodos: ITodo[];
  onUpdateTodo: (todo: ITodo) => void;
  onRemoveTodo: (id: string) => void;
  onToggleComplete: (id: string) => void;
};

export const TodosList: React.FC<ITodosListProps> = ({ listTodos, onUpdateTodo, onRemoveTodo, onToggleComplete }) => {

  const [editableTodo, setEditableTodo] = useState<ITodo | null>(null);
  const [todoNewValue, setTodoNewValue] = useState<INewTodo>({
    title: '',
    description: '',
  });

  const handleEditableTodo = (todo: ITodo) => {
    setEditableTodo(todo);
    setTodoNewValue({
      title: todo.title,
      description: todo.description,
    });
  };

  const handleUpdateTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editableTodo && onUpdateTodo({
      ...editableTodo,
      title: todoNewValue.title,
      description: todoNewValue.description,
    });
    setEditableTodo(null);
  };

  const handleTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => setTodoNewValue({
    ...todoNewValue,
    [event.target.name]: event.target.value,
  });

  const handleCancelEditing = () => {
    setEditableTodo(null);
    setTodoNewValue({
      title: '',
      description: '',
    });
  };

  return (
    <div className="todos-list">
      <h2>Liste des tâches</h2>
      <ListGroup>
        {
          listTodos.length ?
            listTodos.map(todo => (
              <ListGroupItem key={todo.id}>
                {
                  !!editableTodo && todo.id === editableTodo.id
                    ?
                    // When a todo is editable
                    <Form onSubmit={handleUpdateTodo}>
                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <Label for="exampleEmail">Nom de la tâche</Label>
                            <Input type="text" name="title" value={todoNewValue.title} onChange={handleTodoChange} />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label for="exampleEmail">Description de la tâche en une ligne</Label>
                            <Input type="text" name="description" value={todoNewValue.description} onChange={handleTodoChange} />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup className="align-btn">
                            <Button color="success">Modifier la tâche</Button>
                            {' '}
                            <Button color="danger" onClick={handleCancelEditing}>Annuler</Button>
                          </FormGroup>
                        </Col>
                      </Row>

                    </Form>
                    :
                    <>
                      <strong>
                        {`${todo.title}: `}
                      </strong>
                      {todo.description} -
                      <Button color="link" onClick={() => handleEditableTodo(todo)}>Modifier</Button>
                -
                      <Button color="link" onClick={() => onRemoveTodo(todo.id)}>Supprimer</Button>
                      <Button className="todo-status" color="link" onClick={() => onToggleComplete(todo.id)}>
                        <Badge title={`Marquer comme ${todo.completed ? 'Non' : ''} complétée`} color={todo.completed ? 'success' : 'danger'}>
                          {todo.completed ? 'Complétée' : 'Non complétée'}
                        </Badge>
                      </Button>
                    </>
                }
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
