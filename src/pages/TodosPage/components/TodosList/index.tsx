import React from 'react';
import { Badge, Button, ListGroup, ListGroupItem } from 'reactstrap';

interface ITodosListProps {

};

export const TodosList: React.FC<ITodosListProps> = () => {
  return (
    <div className="todos-list">
      <h2>Liste des tâches</h2>
      <ListGroup>
        <ListGroupItem>
          <strong>
            Todo title
          </strong>
          : A toute l'équipe - <Button color="link">link</Button>
          <Badge color="danger">Non complete</Badge>
        </ListGroupItem>
        <ListGroupItem>
          <strong>
            Todo title
          </strong>
          : A toute l'équipe - <Button color="link">link</Button>
          <Badge color="danger">Non complete</Badge>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};
