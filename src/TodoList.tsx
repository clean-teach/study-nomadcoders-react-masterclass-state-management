import { useForm } from 'react-hook-form';

interface IForm {
  toDo: string;
}

function TodoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log('add to do : ', data);
    setValue('toDo', '');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          type="text"
          placeholder="Write a to do"
          {...register('toDo', { required: 'Please write a To Do' })}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoList;
