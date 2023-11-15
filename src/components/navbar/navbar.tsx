import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { APP_NAME } from "~/constants/app-constants";
import ImgLogoColored from "~/media/images/logo-colored.svg?jsx";
import styles from "./navbar.scss?inline";
import { IcOutlineMenu } from "~/media/icons/outline-menu";
import Modal from "../modal/modal";
import { IcBaselineArrowOutward } from "~/media/icons/arrow-outward";

export default component$(() => {
  useStylesScoped$(styles);

  const isMobileNavOpen = useSignal(false);

  return (
    <nav class="z-10">
      <div class="container flex items-center justify-between">
        {/* Left side navigation */}
        <div id="Navbar_Brand_Logo" class="flex items-stretch gap-1">
          <Link href="/">
            <ImgLogoColored
              style={{ width: "28px", height: "28px" }}
              aria-label={`${APP_NAME} logo`}
            />
          </Link>
          <Link
            href="/"
            class="flex items-center rounded px-2 text-xl font-extrabold transition-colors duration-300 ease-linear hover:bg-gray-200 hover:text-gray-900"
          >
            {APP_NAME}
          </Link>
        </div>
        {/* Right side navigation */}
        <div id="Navbar_Links" class="hidden gap-2 md:flex">
          <ul>
            <li>
              <a
                class="flex items-center gap-1"
                href="https://github.com/bytebury"
              >
                Open Source
                <IcBaselineArrowOutward />
              </a>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">Portfolio</Link>
            </li>
            <li>
              <a href="mailto:hey@bytebury.com" class="contact">
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
        {/* Hamburger menu on mobile */}
        <div id="Navbar_hamburger" class="flex md:hidden">
          <button
            class="hamburger"
            aria-label="Navigation Menu"
            onClick$={() => (isMobileNavOpen.value = true)}
          >
            <IcOutlineMenu style={{ width: "24px", height: "24px" }} />
          </button>
        </div>
      </div>
      <Modal class="md:hidden" isOpen={isMobileNavOpen}>
        <div q:slot="title">Navigation</div>
        <div class="flex flex-col gap-3">
          <ul class="modal-nav">
            <li>
              <a class="block py-2.5" href="https://github.com/bytebury">
                Open Source ✨
              </a>
            </li>
            <li>
              <Link class="block py-2.5" href="/">
                Services
              </Link>
            </li>
            <li>
              <Link class="block py-2.5" href="/">
                Portfolio
              </Link>
            </li>
          </ul>
          <a
            href="mailto:hey@bytebury.com"
            class="contact text-center font-bold"
          >
            Get in Touch
          </a>
        </div>
      </Modal>
    </nav>
  );
});
