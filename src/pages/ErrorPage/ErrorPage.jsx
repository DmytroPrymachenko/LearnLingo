import { useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import SvgComponent from "./Test";

const Test = styled.div`
  width: 232px;
  position: relative;
`;
const Test2 = styled.div`
  position: absolute;
  z-index: 10;
  right: 20px;
  top: 16px;
`;

const ErrorPage = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 9; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        options.push({
          value: `${formattedHour}:${formattedMinute}`,
          label: `${formattedHour}:${formattedMinute}`,
        });
      }
    }
    return options;
  };

  const handleTimeChange = (selectedOption) => {
    setSelectedTime(selectedOption);
    console.log(selectedOption);
  };

  const customStyles = {
    dropdownIndicator: () => ({ display: "none" }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    control: (provided) => ({
      ...provided,
      fontSize: "16px",
      paddingLeft: "18px",
      border: "1px solid rgba(25, 26, 21, 0.1)",
      borderRadius: "12px",
      cursor: "pointer",
      overflowY: "hidden",
      width: "232px",
      height: "52px",
    }),
    option: (provided, state) => ({
      ...provided,
      padding: "8px",
      backgroundColor: "transparent",
      color: state.isFocused
        ? "#121417"
        : state.isSelected
        ? "#000 bolt"
        : "rgba(18, 20, 23, 0.2)",
      width: "170px",
      cursor: "pointer",
      overflowY: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "125%",
      textAlign: "center",
    }),
    menu: (provided) => ({
      ...provided,

      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      width: "150px",
      height: "150px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      overflowY: "auto",
      scrollbarWidth: "none",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 20px 69px 0 rgba(0, 0, 0, 0.07)",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "&::before": {
        content: '"Meeting Time"',
        marginTop: "10px",
        marginLeft: "-25px",
        fontWeight: "bold",
      },
    }),
    menuList: (provided) => ({
      ...provided,
      overflowY: "auto",
      paddingTop: "10px",
    }),
    singleValue: (provided) => ({
      ...provided,
      fontWeight: "bold",
    }),
  };

  return (
    <div>
      <h1>Error Page</h1>
      <Test>
        <Test2>
          <SvgComponent />
        </Test2>
        <Select
          value={selectedTime}
          onChange={handleTimeChange}
          options={generateTimeOptions()}
          placeholder="Оберіть час"
          styles={customStyles}
          //   components={{ Option: CustomOption }}
        />
      </Test>
    </div>
  );
};

export default ErrorPage;
