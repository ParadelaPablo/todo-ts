import { type Todo as TodoType, type TodoId } from '../types'

interface Props extends TodoType {
  onCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onCompleteTodo }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onCompleteTodo({ id, completed: event.target.checked })
  }

  return (
        <div>
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={handleChange}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => {
                  onRemoveTodo({ id })
                }} />
        </div>
  )
}
