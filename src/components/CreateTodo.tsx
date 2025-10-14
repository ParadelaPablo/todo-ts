import { type TodoTitle } from '../types'
import { useState } from 'react'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && inputValue !== '') {
      onAddTodo({ title: inputValue })
      setInputValue('')
    }
  }

  return (

        <input
        className="new-todo"
        value={inputValue}
        onChange={handleChange}
        placeholder="What needs to be done?"
        onKeyDown={handleKeyDown}
        autoFocus
        />
  )
}
