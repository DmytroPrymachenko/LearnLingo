const RadioButtonActive = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={18}
      height={18}
      x={3}
      y={3}
      stroke="#F4C550"
      strokeWidth={2}
      rx={9}
    />
    <rect width={10} height={10} x={7} y={7} fill="#F4C550" rx={5} />
  </svg>
);
export default RadioButtonActive;
