import {
  $,
  Slot,
  component$,
  useResource$,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";
import styles from "./modal.scss?inline";
import { IcBaselineClose } from "~/media/icons/close";

export interface ModalProps {
  isOpen: Signal<boolean>;
  class?: string;
}

export default component$((props: ModalProps) => {
  useStylesScoped$(styles);

  const modalRef = useSignal<Element>();

  useResource$(({ track }) => {
    track(() => props.isOpen.value);

    if (props.isOpen.value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  const dismiss = $((event: any) => {
    if (!modalRef.value?.contains(event.target)) {
      props.isOpen.value = false;
    }
  });

  return (
    <div
      class={`modal ${props.class} ${props.isOpen.value ? "block" : "hidden"}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick$={dismiss}
    >
      <div class="backdrop"></div>
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-start justify-center p-4 text-center">
          <div class="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg">
            <div class="body" ref={modalRef}>
              <div class="sm:flex sm:items-start">
                <button
                  onClick$={() => {
                    props.isOpen.value = false;
                  }}
                  type="button"
                  class="cancel"
                >
                  <IcBaselineClose class="h-7 w-7" />
                </button>
                <div class="flex w-full flex-col gap-4 text-left">
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
