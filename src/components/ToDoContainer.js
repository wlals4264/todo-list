import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import styled from 'styled-components';

const Header = styled.header`
  width: 80vw;
`;
const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function ToDoContainer() {
  return (
    <>
      <Header>
        <Title>TODO LIST</Title>
        <ToDoForm />
      </Header>
      <div>
        <ToDoList />
      </div>
    </>
  );
}
