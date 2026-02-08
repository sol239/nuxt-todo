import Dexie, { type Table } from 'dexie';
import { useRuntimeConfig } from '#app';
import type { ITodo } from './model/ITodo';



export class MyDatabase extends Dexie {
  todos!: Table<ITodo>; 
  constructor(dbName: string) {
    super(dbName);
    this.version(1).stores({
      todos: '++id, title, completed' // Indexy
    });
  }
}

// Exportujeme jednu instanci (singleton)
export const db = (() => {
  const config = useRuntimeConfig();
  return new MyDatabase(config.public.dbName);
})();