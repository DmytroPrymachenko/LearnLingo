const SVGEsc = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="#121417"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M24 8 8 24M8 8l16 16"
    />
  </svg>
);
export default SVGEsc;
