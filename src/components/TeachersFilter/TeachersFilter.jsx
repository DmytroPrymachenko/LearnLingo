import Select from "react-select";
import { TeachersFilterDiv, TeachersFilterSpan } from "./TeachersFilter.Styles";
import { useState } from "react";

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

const TeachersFilter = ({ data, setTeachersFilter }) => {
  // const [teachersFilter, setTeachersFilter] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const allLanguages = data
    ? data.reduce((acc, teacher) => {
        teacher.languages.forEach((language) => {
          if (!acc.includes(language)) {
            acc.push(language);
          }
        });
        return acc;
      }, [])
    : [];
  console.log(allLanguages);

  const optionsLanguages = allLanguages.map((language) => ({
    value: language,
    label: language,
  }));

  const handleLanguageChange = (selectedOption) => {
    setSelectedLanguage(selectedOption ? selectedOption.value : null);

    if (selectedOption) {
      const filteredTeachers = data.filter((teacher) =>
        teacher.languages.includes(selectedOption.value)
      );
      setTeachersFilter(filteredTeachers);
    } else {
      setTeachersFilter(data);
    }
  };

  console.log(data);
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
                onChange={handleLanguageChange}
                value={
                  selectedLanguage
                    ? { value: selectedLanguage, label: selectedLanguage }
                    : null
                }
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
