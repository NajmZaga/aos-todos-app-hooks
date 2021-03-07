import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

interface IAddTodoProps {
  onSaveTodo: (todo: INewTodo) => void;
};

export interface INewTodo {
  title: string;
  description: string;
};

export const AddTodo: React.FC<IAddTodoProps> = ({ onSaveTodo }) => {

  const [todo, setTodo] = useState<INewTodo>({
    title: '',
    description: '',
  });

  const handleTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => setTodo({
    ...todo,
    [event.target.name]: event.target.value,
  });

  const handleSaveTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSaveTodo(todo);
    setTodo({
      title: '',
      description: '',
    });
  };

  return (
    <div>
      <h2>Créer une nouvelle tâche</h2>
      <Form onSubmit={handleSaveTodo}>
        <Row>
          <Col md="4">
            <FormGroup>
              <Label for="exampleEmail">Nom de la tâche</Label>
              <Input type="text" name="title" value={todo.title} onChange={handleTodoChange} />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label for="exampleEmail">Description de la tâche en une ligne</Label>
              <Input type="text" name="description" value={todo.description} onChange={handleTodoChange} />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Button className="align-btn" color="primary">Ajouter la tâche</Button>
            </FormGroup>
          </Col>
        </Row>

      </Form>
    </div>
  );
};
