import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'localTodo',
  storage: localStorage,
});

// export enum Categories {
//   'TO_DO' = 'TO_DO',
//   'DOING' = 'DOING',
//   'DONE' = 'DONE',
// }

export interface IToDo {
  text: string;
  id: number;
  //   category: Categories;
  category: string;
}
export interface ICategory {
  category: string;
  id: number;
}

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom<IToDo['category']>({
  key: 'category',
  default: 'TO_DO',
});

export const categoriesState = atom<ICategory[]>({
  key: 'categories',
  default: [
    {
      category: 'TO_DO',
      id: 0,
    },
    {
      category: 'DOING',
      id: 1,
    },
    {
      category: 'DONE',
      id: 2,
    },
  ],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    // console.log(category);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
