import {
  FILTER_QUERY_PARAM_NAME,
  SORT_QUERY_PARAM_NAME,
  LOCAL_STORAGE_TASKS_KEY,
  PRIORITY,
} from "./constant";

export const setQueryParameter = (key, value) => {
  const url = new URL(window.location);
  url.searchParams.set(key, value);
  window.history.pushState({}, "", url);
};

export const getQueryParameter = (key) => {
  const url = new URL(window.location);
  return url.searchParams.get(key);
};

export const removeQueryParameter = (key) => {
  const url = new URL(window.location);
  url.searchParams.delete(key);
  window.history.pushState({}, "", url);
};

export const setDataToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getDataFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

export const setTasksToLocalStorage = (data) => {
  setDataToLocalStorage(LOCAL_STORAGE_TASKS_KEY, data);
};

export const getTasksFromLocalStorage = () => {
  return getDataFromLocalStorage(LOCAL_STORAGE_TASKS_KEY);
};

export const sortTasksByPriority = (tasks, priority) => {
  return tasks.sort((a, b) => {
    if (priority == PRIORITY.HIGH) return a.priority - b.priority;
    else if (priority == PRIORITY.LOW) return b.priority - a.priority;
  });
};

export const filterTasksByStatus = (tasks, status) => {
  return tasks.filter((task) => task.status === status);
};

export const getTasks = () => {
  let tasks = getTasksFromLocalStorage();

  const filterQueryParam = getQueryParameter(FILTER_QUERY_PARAM_NAME);
  const sortQueryParam = getQueryParameter(SORT_QUERY_PARAM_NAME);

  if (sortQueryParam) tasks = sortTasksByPriority(tasks, sortQueryParam);
  if (filterQueryParam) tasks = filterTasksByStatus(tasks, filterQueryParam);

  return tasks ?? [];
};
