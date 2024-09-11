import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create()(
  persist(
    (set, get) => ({
      id: 0,
      tasks: [],
      updateTasks: () => {
        set((state) => {
          return {tasks: state.tasks.map((task) => ({...task, amount: task.cost}))}
        });
      },
      updatePayments: () => {
        set((state) => {
          return {payments: state.payments.map((payment) => ({...payment, amount: payment.amount}))}
        });
      },
      addTask: (newTask) =>
        set((state) => {
          const nextId = get().id + 1;
          newTask = { id: nextId, ...newTask };
          return { id: nextId, tasks: [...state.tasks, newTask] };
        }),
      updateTask: (updatedTask) =>
        set(() => {
          const filtredTasks = get().tasks.filter(
            (task) => task.id !== updatedTask.id
          );
          return { tasks: [...filtredTasks, updatedTask] };
        }),
      payments: [],
      addPayment: (newPayment) =>
        set((state) => {
          const nextId = get().id + 1;
          newPayment = { id: nextId, ...newPayment };
          return {
            id: nextId,
            payments: [...state.payments, newPayment],
          };
        }),
      updatePayment: (updatedPayment) =>
        set(() => {
          const filtredPayments = get().payments.filter(
            (payment) => payment.id !== updatedPayment.id
          );
          return { payments: [...filtredPayments, updatedPayment] };
        }),
      dateRange: [0, 0],
      setDateRange: (start, end) => {
        set(() => {
          return {
            dateRange: [start, end],
          };
        });
      },
      resetDateRange: () => {
        set(() => {
          return {
            dateRange: [0, 0],
          };
        });
      },
    }),
    {
      name: "koshelv6",
    }
  )
);
