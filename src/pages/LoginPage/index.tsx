import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { AppNavbar } from '../../components/AppNavbar';

interface ILoginPageProps {

}

interface IAuthState {
  email: string;
  password: string;
};

export const LoginPage: React.FC<ILoginPageProps & RouteComponentProps> = ({ history }) => {

  const [authState, setAuthState] = useState<IAuthState>({
    email: '',
    password: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setAuthState({
    ...authState,
    [event.target.name]: event.target.value,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (authState.email === 'test@test.com' && authState.password === 'test') {
      history.push('/');
    }
  };

  return (
    <div className="login-page">
      <AppNavbar isAuthorized={false} />
      <Container>
        <Row>
          <Col md={{
            size: 4,
            offset: 4
          }}>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Adresse e-mail</Label>
                <Input type="email" name="email" onChange={handleInputChange} />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Mot de passe</Label>
                <Input type="password" name="password" onChange={handleInputChange} />
              </FormGroup>
              <FormGroup>
                <Button color="primary">Soumettre</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
