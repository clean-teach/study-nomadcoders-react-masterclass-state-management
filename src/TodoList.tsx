import { useState } from 'react';
import { useForm } from 'react-hook-form';

// function TodoList() {
//   const [toDo, setToDo] = useState('');
//   const [toDoError, setToDoError] = useState('');
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDo(value);
//     setToDoError('');
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError('To do should be longer');
//     }
//     console.log('submit');
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           type="text"
//           placeholder="Write a to do"
//           value={toDo}
//           onChange={onChange}
//         />
//         <button>Add</button>
//         {toDoError !== '' ? toDoError : null}
//       </form>
//     </div>
//   );
// }

function TodoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input type="text" placeholder="Write a to do" {...register('email')} />
        <input
          type="text"
          placeholder="Write a to do"
          {...register('firstName')}
        />
        <input
          type="text"
          placeholder="Write a to do"
          {...register('lastName')}
        />
        <input
          type="text"
          placeholder="Write a to do"
          {...register('password')}
        />
        <input
          type="text"
          placeholder="Write a to do"
          {...register('password2')}
        />
        <input
          type="text"
          placeholder="Write a to do"
          {...register('userName')}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoList;
