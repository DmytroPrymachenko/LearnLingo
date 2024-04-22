import styled from "styled-components";

const TeachersStyledSVG = styled.svg`
  position: absolute;
  top: 12%;
  right: 19%;
`;

const TeachersListImageActive = (props) => (
  <TeachersStyledSVG
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <circle cx={6} cy={6} r={6} fill="#fff" />
    <circle cx={6} cy={6} r={4} fill="#38CD3E" />
  </TeachersStyledSVG>
);
export default TeachersListImageActive;
