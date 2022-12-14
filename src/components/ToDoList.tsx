import { useForm } from 'react-hook-form';
import { atom, useRecoilState } from 'recoil';

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: 'TO_DO' | 'DOING' | 'DONE';
}

const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldTodos) => [
      { text: toDo, id: Date.now(), category: 'TO_DO' },
      ...oldTodos,
    ]);
    setValue('toDo', '');
    console.log(toDos);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          type="text"
          placeholder="Write a to do"
          {...register('toDo', { required: 'Please write a To Do' })}
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
