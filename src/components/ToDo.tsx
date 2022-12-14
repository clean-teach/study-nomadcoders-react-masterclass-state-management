import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoriesState, IToDo, toDoState } from '../atoms';

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const categories = useRecoilValue(categoriesState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldTodos) => {
      const targetIndex = oldTodos.findIndex((toDo) => toDo.id === id);
      //   const oldTodo = oldTodos[targetIndex];
      const newToDo = { text, id, category: name as any };
      //   console.log(oldTodos, targetIndex, oldTodo, newToDo);
      return [
        ...oldTodos.slice(0, targetIndex),
        newToDo,
        ...oldTodos.slice(targetIndex + 1),
      ];
    });
  };
  const onDelete = () => {
    setToDos((oldTodos) => {
      return oldTodos.filter((toDo) => toDo.id !== id);
    });
  };
  return (
    <li>
      <button onClick={onDelete}>❌</button>
      <span>{text}</span>
      {/* {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )} */}
      {categories.map((category) => {
        return (
          <button key={category.id} name={category.category} onClick={onClick}>
            {category.category}
          </button>
        );
      })}
    </li>
  );
}

export default ToDo;
