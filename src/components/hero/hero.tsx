import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./hero.scss?inline";
import Banner from "../banner/banner";
import { useStoicQuote } from "~/routes";

export default component$(() => {
  useStylesScoped$(styles);

  const stoicQuoteSignal = useStoicQuote();

  return (
    <header>
      <div class="container w-auto">
        <Banner type="default" exclamation="🧠">
          {stoicQuoteSignal.value.text}
        </Banner>
      </div>
      <div class="container text-center">
        <h1 class="text-[1.75rem] leading-[2.5rem] sm:text-4xl sm:leading-[3rem]">
          Crafting Digital Dreams
        </h1>
        to make your life a little better.
      </div>
      <div class="container text-center">
        <a class="cta gradient-border" href="#">
          <div class="bg-gray-100">Check out our Solutions</div>
        </a>
      </div>
    </header>
  );
});
