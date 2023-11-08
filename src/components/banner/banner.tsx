import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./banner.scss?inline";

export interface BannerProps {
  type?: "warning" | "danger" | "success" | "info" | "default";
}

export default component$((props: BannerProps) => {
  useStylesScoped$(styles);

  return (
    <div class={`banner ${props.type ?? "default"}`}>
      <Slot />
    </div>
  );
});
