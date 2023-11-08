import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";
import styles from "./modal.scss?inline";
import { IcBaselineClose } from "~/media/icons/close";

export interface ModalProps {
  isOpen: Signal<boolean>;
  class?: string;
}

export default component$((props: ModalProps) => {
  useStylesScoped$(styles);

  return (
    <div
      class={`modal ${props.class} ${props.isOpen.value ? "block" : "hidden"}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="backdrop"></div>
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-start justify-center p-4 text-center">
          <div class="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg">
            <div class="body">
              <div class="sm:flex sm:items-start">
                <button
                  onClick$={() => {
                    props.isOpen.value = false;
                  }}
                  type="button"
                  class="cancel"
                >
                  <IcBaselineClose class="h-5 w-5" />
                </button>
                <div class="text-left">
                  <h3>
                    <Slot name="title" />
                  </h3>
                  <div class="content">
                    <Slot />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
