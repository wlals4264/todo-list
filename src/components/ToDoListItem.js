import React from 'react';

export default function ToDoListItem({ id, text, isChecked }) {
  return (
    <li id={id}>
      <input type="checkbox" checked={isChecked} readOnly />
      {text}
    </li>
  );
}
