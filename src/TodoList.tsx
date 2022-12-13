import { useState } from 'react';

function TodoList() {
  const [toDo, setToDo] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write a to do"
          value={toDo}
          onChange={onChange}
        />
      </form>
    </div>
  );
}

export default TodoList;
