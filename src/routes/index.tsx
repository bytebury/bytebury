import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import Banner from "~/components/banner/banner";
import Hero from "~/components/hero/hero";
import { GITHUB_URL } from "~/constants/app-constants";
import { IcBaselineFormatQuote } from "~/media/icons/quotes";

export const useStoicQuote = routeLoader$(async () => {
  const response = await fetch("https://stoic-quotes.com/api/quote");
  return response.json();
});

export default component$(() => {
  return (
    <div class="flex flex-col gap-8">
      <Hero />
      <div class="flex flex-col gap-8">
        <div class="container">
          <Banner type="warning" exclamation="🙈">
            Pardon our appearance &mdash; we're working on getting our content
            updated
          </Banner>
        </div>
        <section class="container flex flex-col gap-4">
          <h1 class="text-2xl sm:text-3xl">
            Local Inspiration, Global Influence
          </h1>
          <p>
            Based in the heart of Windsor, CT, we craft online solutions that
            resonate globally. From local enterprises to broader communities,
            our tailored web-development services are designed for everyone.
            Experience the fusion of hometown warmth and universal appeal as we
            bring your digital dreams to life.
          </p>
          <p>
            Our applications have left impressions on thousands of individuals
            in over 70 countries world-wide. We'd be happy to get your website
            or application the same reach.
          </p>
        </section>
        <section class="container flex flex-col gap-4">
          <h1 class="text-2xl sm:text-3xl">
            <span class="text-primary">♥</span> We Byte Back
          </h1>
          <p>
            We "byte back" to open-source. We believe in the power of
            community-driven innovation, and our dedication to open-source
            projects reflects this belief. We actively contribute our expertise,
            time, and resources to various open-source initiatives, fostering a
            culture of collaboration and shared learning. Whether it's
            developing tools, sharing code, or supporting forums and events, we
            aim to nurture a wholesome ecosystem. Our team not only utilizes
            open-source technologies but passionately engages in giving back,
            knowing that by supporting these projects, we empower a collective
            growth that extends beyond our company's walls. It's about more than
            code; it's about cultivating an environment where knowledge
            flourishes and innovation thrives, benefitting not just our
            projects, but the larger community as a whole. You can check out our
            <a href={GITHUB_URL}>
              &nbsp;open-source initiatives (including our website!) here.
            </a>
          </p>
        </section>
        <section class="flex flex-col gap-4 border-y border-dashed border-black/20 bg-blue-100 py-8">
          <div class="container flex flex-col gap-8">
            <div>
              <div class="flex items-center justify-between">
                <h1 class="text-2xl sm:text-3xl">Voices of Success</h1>
                <IcBaselineFormatQuote class="text-primary h-10 w-10 md:h-14 md:w-14" />
              </div>
              <p>
                we take immense pride in the success stories that our clients
                graciously share. Here's what some of them have to say about
                their experiences collaborating with us:
              </p>
            </div>
            <div class="flex flex-col gap-8 md:flex-row">
              <div class="flex w-full flex-col gap-2 rounded-xl bg-white p-5 shadow-lg">
                <div>
                  <strong>Rachael</strong>
                  <p class="text-sm text-gray-600">Fun Banking</p>
                </div>
                I work with special needs students and wanted to teach them how
                to manage their money through a reward program that resembled a
                bank, so that they can be ready for "the real world". I use it
                every day.
              </div>
              <div class="flex w-full flex-col gap-2 rounded-xl bg-white p-5 shadow-lg">
                <div>
                  <strong>Jamie</strong>
                  <p class="text-sm text-gray-600">Fun Banking</p>
                </div>
                I searched forever to find an application like this for our
                students &mdash; I love it!
              </div>
              <div class="flex w-full flex-col gap-2 rounded-xl bg-white p-5 shadow-lg">
                <div>
                  <strong>Trey</strong>
                  <p class="text-sm text-gray-600">Run169</p>
                </div>
                I needed a better way to track my progress on 169 and create a
                community around it. I know the owner, and reached out and love
                the website he made.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Bytebury | Crafting Digital Dreams",
  meta: [
    {
      name: "description",
      content:
        "Transform your digital vision into reality with Bytebury's custom software development services. We specialize in web app development, AI solutions, and more. Let's innovate together.",
    },
  ],
};
