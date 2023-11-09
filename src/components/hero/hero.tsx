import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./hero.scss?inline";
import Banner from "../banner/banner";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="container -mt-10">
        <Banner type="warning" exclamation="🏠">
          Our website is currently under construction
        </Banner>
      </div>
      <div class="container text-center">
        <h1 class="text-2xl sm:text-3xl">Crafting Digital Dreams</h1>
        to make your life a little better.
      </div>
      <div class="container text-center">
        <a class="cta gradient-border" href="#">
          <div class="bg-gray-100">Checkout our Solutions</div>
        </a>
      </div>
    </header>
  );
});
