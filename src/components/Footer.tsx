import { Filters } from './Filter'
import { type FilterValue } from '../types'

interface Props {
  activeCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  completedCount: number
  onFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  onFilterChange,
  onClearCompleted
}) => {
  return (
        <footer className="footer">
            <span className="todo-count">
                <strong>
                  {activeCount}
                </strong>
                <span> Pending</span>
            </span>
            <Filters
            filterSelected={filterSelected}
            onFilterChange={onFilterChange}
            />

            {completedCount >= 0 && (
              <button
                type="button"
                className="clear-completed"
                onClick={onClearCompleted}
              >
                Delete completed
              </button>
            )}

        </footer>
  )
}
