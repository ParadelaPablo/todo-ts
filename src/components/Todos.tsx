import { type ListOfTodos, type TodoId, type Todo as TodoType } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onCompleteTodo }) => {
  return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li
                    key={todo.id}
                    className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onCompleteTodo={onCompleteTodo}
                        onRemoveTodo={onRemoveTodo}
                    />
                </li>
            ))}
        </ul>
  )
}
