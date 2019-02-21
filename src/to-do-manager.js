export function newToDos(todos) {
  return todos || [];
}

export function createToDo(todo, id) {
  return {
    id,
    todo
  };
}

export function addToDo(todos, todo) {
  const newTodos = [
    ...todos,
    createToDo(todo, todos.length)
  ];

  return newTodos;
}

export function completeToDo(todos, completedId) {
  const newTodos = [...todos.filter(todo => todo.id !== completedId)];

  return newTodos;
}

export const workLevelMessages = {
  0: 'Looks like you don\'t have anything to do right now. Take a break!',
  1: 'Looks like you\'re almost done. Keep it up!',
  2: 'Still a little more work to do. Don\'t loose focus!',
  3: 'It\'s a tough job, but somebody\'s got to do it.',
  4: 'This may look like a lot, but I know you can do it!',
  5: 'Maybe it\'s time to take a vacation? I won\'t judge.',
};

export const workLevelByTodoCount = {
  0: 0,
  3: 1,
  6: 2,
  9: 3,
  14: 4
};

function workLevelMeter(todos) {
  const workLevelCounts = Object.keys(workLevelByTodoCount);
  const count = workLevelCounts.find(todoCount => todos.length <= todoCount);
  return typeof count !== 'undefined'
    ? workLevelByTodoCount[count]
    : workLevelCounts.length;
}

export function workLevelMessage(todos) {
  return workLevelMessages[workLevelMeter(todos)];
}
