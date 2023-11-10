import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./footer.scss?inline";
import ImgLogoWhite from "~/media/images/logo-white.svg?jsx";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <div class="container flex flex-col gap-3 py-2 text-center">
        <div class="flex items-center justify-center gap-1 text-gray-500">
          We <span class="text-red-400">&hearts;</span> Open Source
        </div>
        <div class="flex items-center justify-center gap-2 opacity-40">
          <ImgLogoWhite style={{ width: "24px", height: "24px" }} />
          &copy; bytebury 2023
        </div>
      </div>
    </footer>
  );
});
