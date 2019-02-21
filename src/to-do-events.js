const eventOptions = {
  bubbles: true,
  composed: true,
}

export const toDoEventNames = {
  NEW: 'todo-new',
  COMPLETE: 'todo-complete',
}

const toDoEvent = (todo, event) => new CustomEvent(event, {
    ...eventOptions,
    detail: todo
  })

export const eventCompleteToDo = (todo) => toDoEvent(todo, toDoEventNames.COMPLETE)

export const eventNewToDo = (todo) => toDoEvent(todo, toDoEventNames.NEW)
