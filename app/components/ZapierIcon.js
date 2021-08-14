// @flow
import * as React from "react";

type Props = {
  color?: string,
};

export default function ZapierIcon({ color = "#4E5C6E" }: Props) {
  return (
    <svg
      fill={color}
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
    >
      <path d="M14,12.00348 C13.9996,12.59796 13.89092,13.16708 13.6928,13.69244 C13.16752,13.89072 12.59816,13.99964 12.00344,14.00004 L11.99656,14.00004 C11.40216,13.99964 10.83296,13.89104 10.30768,13.69284 C10.10952,13.16764 10.0004,12.59828 10,12.00364 L10,11.99672 C10.0004,11.40224 10.10928,10.83312 10.30712,10.3078 C10.83264,10.10964 11.40192,10.0006 11.99656,10.0002 L12.00344,10.0002 C12.59816,10.0006 13.16752,10.10964 13.69276,10.3078 C13.89076,10.83316 13.99956,11.40228 13.99996,11.99676 L13.99996,12.00368 L13.99996,12.0036 L14,12.00348 Z M19.8888,10.66668 L15.21896,10.66668 L18.52096,7.36468 C18.2617173,7.00059444 17.9725547,6.65876921 17.65648,6.34276 L17.65632,6.34244 C17.340564,6.02673022 16.9990638,5.73786527 16.63536,5.47884 L13.33336,8.78084 L13.33336,4.11128 C12.894135,4.03747693 12.4495423,4.00025584 12.00416,4 L11.99568,4 C11.5503533,4.00023789 11.1058145,4.03743219 10.66664,4.1112 L10.66664,8.78108 L7.36464,5.47908 C7.00075543,5.7381962 6.65910565,6.02719699 6.34324,6.34308 L6.34204,6.34416 C6.02660762,6.65978768 5.73799769,7.00112635 5.4792,7.36464 L8.7812,10.66664 L4.1112,10.66664 C4.1112,10.66664 4.00016,11.54384 4,11.99704 L4,12.00284 C4.00016664,12.4487002 4.03736113,12.8937765 4.1112,13.33348 L8.78104,13.33348 L5.47904,16.63548 C5.99830995,17.3645251 6.63559493,18.0018101 7.36464,18.52108 L10.66664,15.21916 L10.66664,19.8888 C11.1053956,19.962476 11.5495017,19.9996699 11.9944,20 L12.00584,20 C12.4506842,19.999644 12.8947349,19.9624502 13.33344,19.8888 L13.33344,15.21892 L16.63544,18.52092 C16.9992044,18.2618792 17.3407586,17.972987 17.65656,17.65724 L17.65736,17.65664 C17.9730579,17.3408301 18.2619218,16.9992911 18.52096,16.63556 L15.21896,13.33348 L19.8888,13.33348 C19.9624671,12.8947771 19.999661,12.4507249 20,12.00588 L20,11.9944 C19.999644,11.5495558 19.9624502,11.1055051 19.8888,10.6668 L19.8888,10.66668 Z" />
    </svg>
  );
}
