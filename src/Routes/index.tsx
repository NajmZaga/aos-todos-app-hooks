import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { TodosPage } from '../pages/TodosPage/index';

interface IRoutesProps {

};

interface IRoute {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType;
  exact: boolean;
  path: string;
};

export const Routes: React.FC<IRoutesProps> = () => {

  const routes: IRoute[] = [
    {
      component: LoginPage,
      exact: true,
      path: '/login'
    },
    {
      component: TodosPage,
      exact: true,
      path: '/'
    }
  ];

  return (
    <Switch>
      {
        routes.map(route => <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />)
      }
    </Switch>
  );
};
