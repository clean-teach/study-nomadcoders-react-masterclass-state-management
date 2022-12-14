import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from '../atoms';

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const category = useRecoilValue(categoryState);
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldTodos) => [
      { text: toDo, id: Date.now(), category },
      ...oldTodos,
    ]);
    setValue('toDo', '');
  };
  return (
    <>
      <h2>Create To do</h2>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          type="text"
          placeholder="Write a to do"
          {...register('toDo', { required: 'Please write a To Do' })}
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default CreateToDo;
