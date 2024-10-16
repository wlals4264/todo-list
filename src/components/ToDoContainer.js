import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 80vw;
`;

const Header = styled.div``;

const Body = styled.div``;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function ToDoContainer() {
  return (
    <Container>
      <Header>
        <Title>TODO LIST</Title>
        <ToDoForm />
      </Header>
      <Body>
        <ToDoList />
      </Body>
    </Container>
  );
}
