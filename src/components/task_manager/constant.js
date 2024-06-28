export const STATUS = Object.freeze({
  PENDING: "PENDING",
  IN_PROGRESS: "IN_PROGRESS",
  DONE: "DONE",
});

export const STATUS_DISPLAY_MAP = Object.freeze({
  [STATUS.PENDING]: "PENDING",
  [STATUS.IN_PROGRESS]: "IN PROGRESS",
  [STATUS.DONE]: "DONE",
});

export const PRIORITY = Object.freeze({
  LOW: 2,
  MEDIUM: 1,
  HIGH: 0,
});

export const SORTING_OPTIONS = [
  {
    value: PRIORITY.LOW,
    label: "LOW PRIORITY",
  },
  {
    value: PRIORITY.HIGH,
    label: "HIGH PRIORITY",
  },
];

export const LOCAL_STORAGE_TASKS_KEY = "tasks";
export const SORT_QUERY_PARAM_NAME = "sort_by";
export const FILTER_QUERY_PARAM_NAME = "filter_by";
