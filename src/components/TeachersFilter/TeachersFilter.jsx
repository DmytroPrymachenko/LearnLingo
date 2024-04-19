import React from "react";
import Select from "react-select";
import { TeachersFilterDiv, TeachersFilterSpan } from "./TeachersFilter.Styles";

const optionsLanguages = [
  { value: "French", label: "French" },
  { value: "German", label: "German" },
  { value: "Mandarin Chinese", label: "Mandarin Chinese" },
];
const optionsLevel = [
  { value: "A1 Beginner", label: "A1 Beginner" },
  { value: "A2 Elementary", label: "A2 Elementary" },
  { value: "B1 Intermediate", label: "B1 Intermediate" },
  { value: "B2 Upper-Intermediate", label: "B2 Upper-Intermediate" },
];
const Price = [
  { value: "30", label: "30" },
  { value: "40", label: "40" },
  { value: "50", label: "50" },
];

const customComponents = {
  padding: "0",

  //   dropdownIndicator: () => ({ display: "none" }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  control: () => ({
    display: "flex",
  }),
  menu: (provided) => ({
    ...provided,
    border: "none",
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
    color: isFocused ? "#121417" : "rgba(18, 20, 23, 0.2)",
    backgroundColor: "transparent",

    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "111%",
  }),
};

const TeachersFilter = () => {
  return (
    <>
      <>
        <section>
          <TeachersFilterDiv>
            <div>
              <TeachersFilterSpan>Languages</TeachersFilterSpan>
              <Select
                options={optionsLanguages}
                styles={customComponents}
                defaultInputValue="French"
              />
            </div>
            <div>
              <TeachersFilterSpan>Level of knowledge</TeachersFilterSpan>
              <Select options={optionsLevel} styles={customComponents} />
            </div>
            <div>
              <TeachersFilterSpan>Price</TeachersFilterSpan>
              <Select options={Price} styles={customComponents} />
            </div>
          </TeachersFilterDiv>
        </section>
      </>
    </>
  );
};

export default TeachersFilter;
