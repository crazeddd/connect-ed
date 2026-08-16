import { For } from "solid-js";
import { dismissToast, toasts } from "./toast";

export default function Toaster() {
  return (
    <div class="toast-container">
      <For each={toasts()}>
        {(item) => (
          <div
            class={`toast toast-${item.type}`}
            onClick={() => dismissToast(item.id)}
          >
            {item.message}
          </div>
        )}
      </For>
    </div>
  );
}