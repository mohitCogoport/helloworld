import * as React from "react";

const IcDownSvg = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Z" fill="#CB6464" />
    <path
      d="M8 11.2V4.8m0 6.4L5.867 8.96M8 11.2l2.133-2.24"
      stroke="#fff"
      strokeLinecap="round"
    />
  </svg>
);

const IcUpSvg = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Z" fill="#67C676" />
    <path
      d="M8 4.8v6.4m0-6.4 2.133 2.24M8 4.8 5.867 7.04"
      stroke="#fff"
      strokeLinecap="round"
    />
  </svg>
);


export  {IcDownSvg, IcUpSvg}