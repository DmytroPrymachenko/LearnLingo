const RadioButtonInactive = (props) => (
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
      stroke="#121417"
      strokeOpacity={0.2}
      strokeWidth={2}
      rx={9}
    />
  </svg>
);
export default RadioButtonInactive;
