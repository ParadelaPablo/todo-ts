import { useState } from "react"
import { Todos } from "./components/Todos"
import { FilterValue, TodoId, TodoTitle } from "./types"
import { type Todo as TodoType } from "./types"
import { TODO_FILTERS } from "./consts"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

const mockTodos = [

  {
    id: "1",
    title: 'Buy tickets to the concert',
    completed: false
  },
  {
    id: "2",
    title: 'Go to the gym',
    completed: false
  },
  {
    id: "3",
    title: 'Finish the project',
    completed: false
  }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL);

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  
  const handleComplete = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length

  const handleClearCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }


  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }
  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <><div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos
        onCompleteTodo={handleComplete}
        onRemoveTodo={handleRemove}
        todos={filteredTodos} />
    </div>
    <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleClearCompleted}
        onFilterChange={handleFilterChange} /></>
  )
}

export default App
