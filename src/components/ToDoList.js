import React from 'react';
import ToDoListItem from './ToDoListItem';
import styled from 'styled-components';

const ListContainer = styled.div`
  margin: 0;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

export default function ToDoList() {
  const datas = [
    {
      id: 1,
      text: '할 일 1',
      isChecked: false,
    },
    {
      id: 2,
      text: '할 일 2',
      isChecked: false,
    },
    {
      id: 3,
      text: '할 일 3',
      isChecked: false,
    },
  ];

  return (
    <ListContainer>
      <Ul>
        {datas.map((data) => (
          <ToDoListItem key={data.id} id={data.id} text={data.text} isChecked={data.isChecked} />
        ))}
      </Ul>
    </ListContainer>
  );
}
