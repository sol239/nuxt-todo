export interface ITodo {
  id?: number;
  title: string;
  description?: string;
  completed: boolean;
  createdAt?: string;
  updatedAt?: string;
  dueDate?: string; 
  listId?: number;   // Foreign key to associate with a list
}