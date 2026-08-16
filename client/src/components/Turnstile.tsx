import { onMount, onCleanup } from "solid-js";

declare global {
  interface Window {
    turnstile: any;
  }
}

interface Props {
  onVerify: (token: string) => void;
}

export default function Turnstile(props: Props) {
  let container!: HTMLDivElement;
  let widgetId: string;

  onMount(() => {
    widgetId = window.turnstile.render(container, {
      sitekey: import.meta.env.VITE_TURNSTILE_SITE_KEY,
      size: "flexible",
      theme: "light",
      callback: (token: string) => {
        props.onVerify(token);
      },
      "expired-callback": () => {
        props.onVerify("");
      },
      "error-callback": () => {
        props.onVerify("");
      },
    });
  });

  onCleanup(() => {
    if (widgetId) {
      window.turnstile.remove(widgetId);
    }
  });

  return <div ref={container} class="turnstile" />;
}
