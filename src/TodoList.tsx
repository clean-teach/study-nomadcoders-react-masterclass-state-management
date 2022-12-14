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

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  password1: string;
  username: string;
  extraError: string;
}

function TodoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: '@naver.com',
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        'password1',
        { message: 'Password are not the same' },
        { shouldFocus: true },
      );
    }
    setError('extraError', { message: 'Server offline.' });
  };

  console.log(errors);

  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: 'Only naver.com emails allowed',
            },
          })}
          placeholder="Email"
        />

        <input
          {...register('firstName', {
            required: 'write here',
            validate: {
              noNico: (value) =>
                value.includes('nico') ? 'no nico allowed' : true,
              noMong: (value) =>
                value.includes('mong') ? 'no mong allowed' : true,
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register('lastName', { required: 'write here' })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register('username', { required: 'write here', minLength: 10 })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register('password', { required: true, minLength: 5 })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register('password1', {
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Your password is too short.',
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default TodoList;
