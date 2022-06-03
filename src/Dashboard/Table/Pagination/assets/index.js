import * as React from 'react'

// const ActiveRightArrow = () => (
//     <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0.879628 7.64027L3.72109 4.32523C3.88159 4.13799 3.88159 3.86169 3.72109 3.67444L0.879629 0.359403C0.57753 0.00695466 7.31427e-07 0.220594 6.65018e-07 0.684797L-2.83474e-07 7.31487C-3.49883e-07 7.77908 0.577529 7.99272 0.879628 7.64027Z" fill="#5936F0"/>
// </svg>
// )

const ActiveRightArrow = (props) => (
  <svg
    width={4}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.88 7.64 3.72 4.325a.5.5 0 0 0 0-.65L.88.358A.5.5 0 0 0 0 .685v6.63a.5.5 0 0 0 .88.325Z"
      fill="#5936F0"
    />
  </svg>
);
// const ActiveLeftArrow = () => (
//     <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M3.12037 0.359729L0.27891 3.67477C0.118415 3.86201 0.118415 4.13831 0.27891 4.32556L3.12037 7.6406C3.42247 7.99305 4 7.77941 4 7.3152L4 0.685125C4 0.220922 3.42247 0.00728012 3.12037 0.359729Z" fill="#5936F0"/>
// </svg>
// )
const ActiveLeftArrow = (props) => (
  <svg
    width={4}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.12.36.28 3.675a.5.5 0 0 0 0 .65L3.12 7.642A.5.5 0 0 0 4 7.315V.685A.5.5 0 0 0 3.12.36Z"
      fill="#5936F0"
    />
  </svg>
);



// const InactiveLeftArrow = () => (
//     <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M3.12037 0.35973L0.27891 3.67477C0.118415 3.86201 0.118415 4.13831 0.27891 4.32556L3.12037 7.6406C3.42247 7.99305 4 7.77941 4 7.3152L4 0.685125C4 0.220922 3.42247 0.00728031 3.12037 0.35973Z" fill="#BDBDBD"/>
// </svg>
// )

const InactiveLeftArrow = (props) => (
  <svg
    width={4}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.12.36.28 3.675a.5.5 0 0 0 0 .65L3.12 7.642A.5.5 0 0 0 4 7.315V.685A.5.5 0 0 0 3.12.36Z"
      fill="#BDBDBD"
    />
  </svg>
);

// const InactiveRightArrow = () => (
//     <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0.879628 7.64027L3.72109 4.32523C3.88159 4.13799 3.88159 3.86169 3.72109 3.67444L0.879628 0.359404C0.577529 0.00695507 -2.75404e-07 0.220594 -2.86475e-07 0.684798L-4.44601e-07 7.31488C-4.55672e-07 7.77908 0.577529 7.99272 0.879628 7.64027Z" fill="#BDBDBD"/>
// </svg>
// )
const InactiveRightArrow = (props) => (
  <svg
    width={4}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.88 7.64 3.72 4.325a.5.5 0 0 0 0-.65L.88.358A.5.5 0 0 0 0 .685v6.63a.5.5 0 0 0 .88.325Z"
      fill="#BDBDBD"
    />
  </svg>
);


export  {InactiveRightArrow, InactiveLeftArrow, ActiveLeftArrow, ActiveRightArrow }