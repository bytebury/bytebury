import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function IcOutlineMenu(
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
        d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
      ></path>
    </svg>
  );
}
