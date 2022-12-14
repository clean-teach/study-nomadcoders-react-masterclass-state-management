import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { toDoSelector } from '../atoms';
import Category from './Category';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const Wrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <Wrapper>
      <h1>To Dos</h1>
      <hr />
      <Category />
      <hr />
      <CreateToDo />
      <hr />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </Wrapper>
  );
}

export default ToDoList;
