import { createSignal } from "solid-js";

export type ToastType = "success" | "error" | "info";

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
  duration?: number;
}

const [toasts, setToasts] = createSignal<Toast[]>([]);

let nextId = 0;

export function toast(
  message: string,
  type: ToastType = "info",
  duration = 3000
) {
  const id = nextId++;

  setToasts((current) => [
    ...current,
    {
      id,
      message,
      type,
      duration,
    },
  ]);

  setTimeout(() => {
    dismissToast(id);
  }, duration);
}

export function dismissToast(id: number) {
  setToasts((current) => current.filter((toast) => toast.id !== id));
}

export { toasts };