import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./banner.scss?inline";

export interface BannerProps {
  type?: "warning" | "danger" | "success" | "info" | "default";
  exclamation?: string;
}

export default component$((props: BannerProps) => {
  useStylesScoped$(styles);

  return (
    <div class="flex w-full">
      <div class={`banner ${props.type ?? "default"}`}>
        <div class="pill">{props.exclamation || "Note"}</div>
        <Slot />
      </div>
    </div>
  );
});
