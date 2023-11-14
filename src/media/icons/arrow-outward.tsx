import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function IcBaselineArrowOutward(
  props: QwikIntrinsicElements["svg"],
  key: string,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
      key={key}
    >
      <path
        fill="currentColor"
        d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"
      ></path>
    </svg>
  );
}
