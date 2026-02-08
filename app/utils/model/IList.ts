import type { ITodo } from "./ITodo";

export interface IList {
  id?: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  todos: ITodo[];
}