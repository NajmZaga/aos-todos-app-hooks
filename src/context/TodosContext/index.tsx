import React, { createContext, useState } from "react";
import { INewTodo } from '../../pages/TodosPage/components/AddTodo';

export const TodosContext: any = createContext({});

export interface ITodo extends INewTodo {
  id: string;
  completed: boolean;
};

export const TodosContextProvider: React.FC<{}> = ({ children }) => {

  const [todos, setTodos] = useState<ITodo[]>([]);

  const generateId = (len: number) => {
    let res = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < len; i++) {
      res += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return res;
  };

  const makeTodo = (todo: INewTodo) => setTodos([
    ...todos,
    {
      ...todo,
      id: generateId(4),
      completed: false,
    }
  ]);

  const updatedTodo = (updatedTodo: ITodo) => setTodos(todos.map(todo => {
    if (todo.id === updatedTodo.id) return { ...todo, title: updatedTodo.title, description: updatedTodo.description };
    return todo;
  }));

  const removeTodo = (id: string) => setTodos((todos.filter(todo => todo.id !== id)));

  const setAsCompleted = (id: string) => setTodos(todos.map(todo => {
    if (todo.id === id) return { ...todo, completed: true };
    return todo;
  }))

  return (
    <TodosContext.Provider value={{
      todos,
      makeTodo,
      updatedTodo,
      removeTodo,
      setAsCompleted
    }}>
      {children}
    </TodosContext.Provider>
  )
};