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

export const SORT_QUERY_PARAM_NAME = "sort_by";
export const FILTER_QUERY_PARAM_NAME = "filter_by";

export const data = [
  {
    id: Date.now(),
    title: "Task 3",
    description:
      "This is task one, This is task one, This is task one his is task one, This is task one, This is task one",
    status: STATUS.DONE,
    priority: PRIORITY.LOW,
  },
  {
    id: Date.now(),
    title: "Task 1",
    description:
      "This is task one, This is task one, This is task one his is task one, This is task one, This is task one",
    status: STATUS.PENDING,
    priority: PRIORITY.HIGH,
  },
  {
    id: Date.now(),
    title: "Task 2",
    description:
      "This is task one, This is task one, This is task one his is task one, This is task one, This is task one",
    status: STATUS.IN_PROGRESS,
    priority: PRIORITY.MEDIUM,
  },
];
