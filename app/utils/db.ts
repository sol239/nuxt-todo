import Dexie, { type Table } from 'dexie';
import { useRuntimeConfig } from '#app';
import type { ITodo } from './model/ITodo';
import type { IList } from './model/IList';

const TODO_SCHEMA = '++id, title, description, completed, createdAt, updatedAt, dueDate, listId';
const LIST_SCHEMA = '++id, name, createdAt, updatedAt';

export class MyDatabase extends Dexie {
  todos!: Table<ITodo>; 
  lists!: Table<IList>;
  constructor(dbName: string) {
    super(dbName);
    this.version(1).stores({
      todos: TODO_SCHEMA,
      lists: LIST_SCHEMA
    });
  }
}

export const db = (() => {
  const config = useRuntimeConfig();
  return new MyDatabase(config.public.dbName);
})();