import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

export default function ToDoContainer() {
  return (
    <>
      <div style={{ width: '80vw' }}>
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>TODO LIST</h1>
        <ToDoForm />
      </div>
      <div>
        <ToDoList />
      </div>
    </>
  );
}
