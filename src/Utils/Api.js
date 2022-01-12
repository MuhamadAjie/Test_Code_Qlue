/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
const prod = "https://jsonplaceholder.typicode.com";
const dev = "http://localhost:8080";
const baseUrl = prod;
export default {
  allTodos: baseUrl + "/todos",
  todosById: baseUrl + "/todos/1",
};
