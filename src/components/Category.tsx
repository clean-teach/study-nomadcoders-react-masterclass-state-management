import React from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { categoriesState, categoryState } from '../atoms';

interface IForm {
  newCategory: string;
}

function Category() {
  const [category, setCategory] = useRecoilState(categoryState);
  const [categories, setCategories] = useRecoilState(categoriesState);
  const onSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<IForm>();
  const onValid = ({ newCategory }: IForm) => {
    if (categories.find((category) => category.category === newCategory)) {
      return setError(
        'newCategory',
        { message: '동일 한 카테고리명을 입력 할 수 없습니다.' },
        { shouldFocus: true },
      );
    }
    setCategories((currentCategories) => {
      // console.log(currentCategories);
      return [...currentCategories, { category: newCategory, id: Date.now() }];
    });
    setValue('newCategory', '');
  };

  return (
    <>
      <div>
        <h2>Select Category</h2>
        <select value={category} onInput={onSelect}>
          {categories.map((category) => (
            <option key={category.id} value={category.category}>
              {category.category}
            </option>
          ))}
          {/* <option value={Categories.TO_DO}>To Do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option> */}
        </select>
      </div>
      <div>
        <h2>Add Category</h2>
        <form onSubmit={handleSubmit(onValid)}>
          <input type="text" {...register('newCategory')} />
          <button>Add</button>
          <span>{errors?.newCategory?.message}</span>
        </form>
      </div>
    </>
  );
}

export default Category;
