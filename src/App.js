import './App.css';
import ToDoContainer from './components/ToDoContainer';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import ToDoListItem from './components/ToDoListItem';

function App() {
  return (
    <>
      <ToDoContainer>
        <ToDoForm></ToDoForm>
        <ToDoList>
          <ToDoListItem></ToDoListItem>
        </ToDoList>
      </ToDoContainer>
    </>
  );
}

export default App;
