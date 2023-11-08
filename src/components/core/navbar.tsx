import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { APP_NAME } from "~/constants/app-constants";
import ImgLogoWhite from "~/media/images/logo-white.svg?jsx";
import styles from "./navbar.scss?inline";
import { IcOutlineMenu } from "~/media/icons/outline-menu";
import Modal from "../modal/modal";

export default component$(() => {
  useStylesScoped$(styles);

  const isMobileNavOpen = useSignal(false);

  return (
    <nav>
      <div class="container flex items-center justify-between">
        {/* Left side navigation */}
        <div id="Navbar_Brand_Logo" class="flex items-stretch gap-1">
          <Link href="/" class="bg-primary rounded-full p-1">
            <ImgLogoWhite
              style={{ width: "28px", height: "28px" }}
              aria-label={`${APP_NAME} logo`}
            />
          </Link>
          <Link
            href="/"
            class="hidden items-center rounded px-3 text-xl font-extrabold transition-colors duration-300 ease-linear hover:bg-gray-200 hover:text-gray-900 md:flex"
          >
            {APP_NAME}
          </Link>
        </div>
        {/* Right side navigation */}
        <div id="Navbar_Links" class="hidden gap-2 md:flex">
          <ul>
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
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">Portfolio</Link>
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
