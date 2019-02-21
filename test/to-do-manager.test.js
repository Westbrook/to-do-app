import {
  expect,
} from '@open-wc/testing';

import {
  workLevelMessage,
  workLevelMessages,
  workLevelByTodoCount
} from '../src/to-do-manager';

describe('To Do Manger', () => {
  it('workLevelMessage', () => {
    let messsage;
    let todos;
    const todoKeys = Object.keys(workLevelByTodoCount);
    todoKeys.forEach(todoCount => {
      todos = [...Array(Number(todoCount)).keys()];
      messsage = workLevelMessages[workLevelByTodoCount[todoCount]];
      expect(workLevelMessage(todos)).to.equal(messsage);
    });
    const todoCount = String(1 + todoKeys[todoKeys.length - 1]);
    todos = [...Array(Number(todoCount)).keys()];
    messsage = workLevelMessages[Object.keys(workLevelMessages).length - 1];
    expect(workLevelMessage(todos)).to.equal(messsage);
  });
});
