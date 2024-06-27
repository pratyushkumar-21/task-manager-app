export const STATUS = Object.freeze({
  PENDING: "PENDING",
  IN_PROGRESS: "IN_PROGRESS",
  DONE: "DONE",
});

export const PRIORITY = Object.freeze({
  LOW: 2,
  MEDIUM: 1,
  HIGH: 0,
});

export const data = [
  {
    title: "Task 1",
    description: "This is task one",
    status: STATUS.PENDING,
    priority: PRIORITY.HIGH,
  },
  {
    title: "Task 2",
    description: "This is task two.",
    status: STATUS.IN_PROGRESS,
    priority: PRIORITY.LOW,
  },
  {
    title: "Task 3",
    description: "This is task three.",
    status: STATUS.DONE,
    priority: PRIORITY.MEDIUM,
  },
];
