import Dexie, { type Table } from 'dexie';
import { useRuntimeConfig } from '#app';
import type { ITodo } from './model/ITodo';

const TODO_SCHEMA = '++id, title, completed';

export class MyDatabase extends Dexie {
  todos!: Table<ITodo>; 
  constructor(dbName: string) {
    super(dbName);
    this.version(1).stores({
      todos: TODO_SCHEMA
    });
  }
}

export const db = (() => {
  const config = useRuntimeConfig();
  return new MyDatabase(config.public.dbName);
})();