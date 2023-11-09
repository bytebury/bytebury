import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero/hero";

export default component$(() => {
  return (
    <div class="flex flex-col gap-4">
      <Hero />
      <div class="container flex flex-col gap-4">
        <h1>Welcome to Bytebury - Where Innovation Meets Functionality</h1>
        <p>
          At Bytebury, we're not just writing code; we're crafting solutions. We
          understand that software isn't just a tool; it's a gateway to
          transformation. With a passion for technology and a commitment to
          excellence, we're your trusted partner in bringing your digital dreams
          to life.
        </p>
        <h1>Our Commitment to You</h1>
        <ul>
          <li>
            ✅ Bespoke Solutions: Tailored to your unique needs, our software
            solutions are as individual as your vision.
          </li>

          <li>
            ✅ Cutting-Edge Technology: We stay at the forefront of innovation
            to ensure your software is always ahead of the curve.
          </li>

          <li>
            ✅ Quality Assurance: Rigorous testing and quality control to
            deliver software that exceeds your expectations.
          </li>

          <li>
            ✅ Timely Delivery: We value your time as much as ours. Timely
            delivery is a promise we keep.
          </li>

          <li>
            ✅ Customer-Centric Approach: Your satisfaction is our priority. We
            work closely with you to ensure we're on the same page every step of
            the way.
          </li>
        </ul>
        <h1>Our Expertise</h1>
        <ul>
          <li>
            Web Development - Crafting responsive, user-friendly websites that
            make a lasting impression.
          </li>
          <li>
            Software Integration - Seamlessly connecting your systems for
            enhanced efficiency and productivity.
          </li>
        </ul>
        <h1>Join the Bytebury Revolution</h1>
        When you choose Bytebury, you choose a partner dedicated to your
        success. Let's turn your ideas into reality and your challenges into
        opportunities. With us, you're not just getting software; you're getting
        a digital future.
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Bytebury | Software Craftsmen",
  meta: [
    {
      name: "description",
      content:
        "Transform your digital vision into reality with Bytebury's custom software development services. We specialize in web app development, AI solutions, and more. Let's innovate together.",
    },
  ],
};
