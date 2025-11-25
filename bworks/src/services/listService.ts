// services/ListService.ts
import { RestService } from '@/src/services/restService';
import { TodoList } from '@/src/models/todoList';
import config from '@/src/config';

/** Service for managing TodoList resources via REST API */
export class ListService extends RestService<TodoList> {
  constructor() {
    // Use baseUrl from config and the specific route (e.g. '/lists')
    super(config.api.baseUrl, '/lists');
  }
}

// Export a singleton instance for use throughout the app
export const listService = new ListService();