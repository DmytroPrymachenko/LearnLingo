// const TapSVG = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     xmlSpace="preserve"
//     width={800}
//     height={800}
//     viewBox="0 0 512 512"
//     {...props}
//   >
//     <g transform="rotate(180, 256, 256)">
//       <path
//         fill="yellow"
//         d="M426.672 221.867c-6.229 0-12.134 1.775-17.229 4.83-1.877-21.803-20.233-38.963-42.505-38.963-10.837 0-20.745 4.062-28.271 10.735-6.05-16.222-21.692-27.802-39.996-27.802-11.042 0-21.129 4.224-28.715 11.136L255.971 41.882C253.54 15.659 239.4 0 218.143 0c-22.562 0-38.938 17.946-38.938 42.974l8.533 238.933c.179 4.702 4.002 8.363 8.841 8.226 4.702-.179 8.388-4.13 8.226-8.841l-8.533-238.626c0-12.74 6.767-25.6 21.871-25.6 12.203 0 19.217 8.883 20.838 26.453l17.067 170.667c.452 4.523 4.292 8.047 8.917 7.671a8.538 8.538 0 0 0 8.107-8.525c0-14.114 11.486-25.6 25.6-25.6s25.6 11.486 25.6 25.6V230.4c0 4.71 3.814 8.533 8.533 8.533s8.533-3.823 8.533-8.533c0-14.114 11.486-25.6 25.6-25.6s25.6 11.486 25.6 25.6V256c0 4.71 3.814 8.533 8.533 8.533s8.533-3.823 8.533-8.533c0-8.934 8.132-17.067 17.067-17.067 8.619 0 17.067 8.457 17.067 17.067v110.933c0 37.026-7.91 55.714-16.273 75.494-6.204 14.66-12.604 29.773-16.606 52.506H220.242c-19.661-86.451-87.347-194.91-128.87-236.433-7.424-7.424-20.326-21.606-23.04-24.593.077-.154.205-.384.444-.7l3.686-3.593c9.958-9.958 43.324-9.95 53.291 0l32.674 32.666a8.53 8.53 0 0 0 12.058 0c3.336-3.336 3.336-8.738 0-12.066l-32.666-32.674c-16.648-16.631-60.791-16.631-77.338-.085l-3.994 3.891a7.851 7.851 0 0 0-.631.683c-5.717 6.912-6.204 15.13-1.306 21.999.196.265.401.521.614.759.631.7 15.556 17.195 24.141 25.779 41.105 41.105 108.8 150.229 125.67 234.573a8.518 8.518 0 0 0 8.363 6.861h204.8a8.529 8.529 0 0 0 8.448-7.322c3.533-24.73 10.18-40.422 16.597-55.603 8.661-20.48 17.621-41.651 17.621-82.142V256c.002-17.86-16.263-34.133-34.132-34.133z"
//       />
//     </g>
//   </svg>
// );

// export default TapSVG;

const TapSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    aria-hidden="true"
    className="iconify iconify--noto"
    viewBox="0 0 128 128"
    {...props}
  >
    <linearGradient
      id="a"
      x1={1609.9}
      x2={1726.5}
      y1={-1536.9}
      y2={-1536.9}
      gradientTransform="matrix(.0021 -1 -1 -.0021 -1476.4 1729)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.128} stopColor="#FFB300" />
      <stop offset={0.647} stopColor="#FFCA28" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M76.38 122.36c-6.58 0-8.79-5.73-8.79-8.34l.04-19.58c0-.47-.22-.92-.6-1.21-.26-.2-.58-.3-.9-.3-.14 0-.29.02-.43.06-1.42.43-2.79.64-4.06.64-3.8 0-6.26-1.95-7.65-3.59a5.785 5.785 0 0 0-4.42-2.02c-.62 0-1.23.1-1.81.29-.73.24-1.51.36-2.32.36-1.29 0-2.68-.31-4.1-.92-1.88-.81-3.29-2.24-4.14-3.31-.9-1.13-2.75-3.03-5-3.03-.34 0-.67.04-.99.13-.48.13-1.05.2-1.65.2-2.73 0-6.31-1.36-8.13-5.18-1.65-3.44-1.61-22.48-1.59-28.73.03-16.45 11.37-39.88 11.49-40.12.04-.08.07-.16.1-.25.3-1.07 1.29-1.82 2.4-1.82l39.73.34c1.14.02 2.13.82 2.4 1.94l.3 1.29c1.48 6.37 5.2 12.04 10.75 16.42 1.19.94 2.21 2.06 3.04 3.33 4.44 6.85 6.89 12.87 9.25 18.69 2.23 5.51 4.34 10.71 7.93 16.08.8 1.2 1.38 4.5.5 7.14-.56 1.7-1.62 2.84-3.14 3.37-1.22.43-2.33.64-3.39.64-3.77 0-7.07-2.81-10.71-9.12-3.89-6.73-4.13-8.5-4.14-8.57-.03-.81-.69-1.43-1.5-1.43h-.02c-.82.01-1.47.7-1.48 1.52l-.12 57.07c0 2.09-1.26 8.01-6.85 8.01z"
    />
    <path
      fill="#EDA600"
      d="m33.83 4.14.02 3 39.69.35c.46.01.86.32.96.77l.3 1.29c1.56 6.7 5.46 12.67 11.29 17.25 1.06.84 1.97 1.84 2.71 2.97 4.37 6.73 6.78 12.68 9.12 18.44 2.26 5.58 4.4 10.85 8.07 16.35.45.68 1.11 3.48.32 5.84-.56 1.67-1.53 2.19-2.22 2.43-1.06.38-2 .56-2.89.56-2.13 0-5.13-.95-9.41-8.37-3.27-5.67-3.86-7.65-3.94-8a3 3 0 0 0-2.87-2.76h-.12c-1.56 0-2.87 1.2-2.99 2.77-.01.08-.01.17-.01.26l-.12 57.07c0 .06-.23 6.49-5.35 6.49-5.99 0-7.29-5.48-7.29-6.83l.04-19.59c0-.95-.45-1.84-1.21-2.41a2.979 2.979 0 0 0-2.65-.46c-1.28.39-2.5.58-3.63.58-2.59 0-4.78-1.03-6.51-3.06a7.29 7.29 0 0 0-5.56-2.55c-.78 0-1.54.12-2.28.36-.58.19-1.2.29-1.86.29-1.09 0-2.27-.27-3.51-.8-1.6-.68-2.81-1.93-3.55-2.86-1.07-1.34-3.29-3.59-6.17-3.59-.47 0-.94.06-1.39.19-.34.09-.79.15-1.26.15-2.28 0-5.25-1.14-6.78-4.33-.68-1.43-1.49-7.46-1.45-28.08.04-16.11 11.23-39.26 11.34-39.49.08-.16.14-.33.19-.5.12-.43.52-.73.96-.73l.01-3m0 0c-1.79 0-3.36 1.19-3.85 2.91 0 0-11.61 23.79-11.64 40.78-.02 11.55.14 26.04 1.74 29.38 2.16 4.52 6.37 6.03 9.49 6.03.76 0 1.46-.09 2.05-.25.2-.05.4-.08.6-.08 1.44 0 2.9 1.3 3.82 2.46 1.05 1.32 2.62 2.85 4.72 3.75 1.78.76 3.35 1.04 4.69 1.04 1.08 0 2.01-.18 2.79-.43.44-.14.89-.21 1.35-.21 1.24 0 2.45.53 3.28 1.5 1.64 1.93 4.46 4.11 8.79 4.11 1.35 0 2.84-.21 4.49-.71l-.04 19.59c0 3.17 2.62 9.84 10.29 9.84 6.34 0 8.35-6.34 8.35-9.49l.12-57.07v-.03.03c.01.24.21 2.09 4.33 9.23 3.86 6.69 7.57 9.87 12.01 9.87 1.23 0 2.53-.25 3.89-.73 5.76-2.05 5.06-10.25 3.39-12.76-7.26-10.88-8.43-21.3-17.17-34.76a15.36 15.36 0 0 0-3.37-3.69c-5.03-3.96-8.77-9.34-10.22-15.58l-.3-1.29a4.028 4.028 0 0 0-3.87-3.09l-39.69-.35h-.04z"
    />
    <path
      fill="#EDA600"
      d="m68.64 74.29.46 21.16-2.45-1.7c-.59 0-1.04-.77-.97-1.65l.77-17.84c.14-1.77 2.1-1.75 2.19.03zM84.8 49.27l2.81 6.97.94 2.47-3.32-.87L82 56.9l.09-7.48c-.01-1.38 2.15-1.24 2.71-.15zM51.53 73.89l.77 13.07c.05.59-2.52.25-2.52.25-.59 0-1.04-.53-.97-1.13l.77-12.23c.13-1.21 1.85-1.18 1.95.04zM34.9 74.12l.77 7.04c.05.32-2.52.13-2.52.13-.59 0-1.04-.28-.97-.61l.77-6.58c.14-.65 1.86-.63 1.95.02z"
    />
  </svg>
);

export default TapSVG;